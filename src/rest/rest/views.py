# src/rest/rest/views.py

from datetime import datetime
import json

from bson import ObjectId
from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from pymongo import MongoClient


client = MongoClient("mongo", 27017)
db = client["mydatabase"]
todos_collection = db["todos"]


def serialize_todo(doc):
    """
    Convert a MongoDB document into a JSON-serializable dict.
    """
    return {
        "id": str(doc.get("_id")),
        "description": doc.get("description", ""),
        "created_at": doc.get("created_at").isoformat() if doc.get("created_at") else None,
    }


def get_all_todos():
    """
    Fetch all todos from MongoDB, sorted by newest first.
    """
    cursor = todos_collection.find().sort("created_at", -1)
    return [serialize_todo(doc) for doc in cursor]


def create_todo(description: str):
    """
    Insert a new todo into MongoDB and return the created document.
    """
    doc = {
        "description": description,
        "created_at": datetime.utcnow(),
    }
    result = todos_collection.insert_one(doc)
    doc["_id"] = result.inserted_id
    return serialize_todo(doc)


@method_decorator(csrf_exempt, name="dispatch")
class TodoListView(View):
    """
    Handle /todos endpoint.

    GET  /todos -> return list of todos
    POST /todos -> create a new todo
    """

    def get(self, request):
        try:
            todos = get_all_todos()
            return JsonResponse({"todos": todos}, status=200)
        except Exception as exc:
            print(f"[ERROR] GET /todos failed: {exc}")
            return JsonResponse({"error": "Failed to fetch todos"}, status=500)

    def post(self, request):
        try:
            try:
                body = json.loads(request.body.decode("utf-8"))
            except json.JSONDecodeError:
                return JsonResponse({"error": "Invalid JSON format"}, status=400)

            description = (body.get("description") or "").strip()
            if not description:
                return JsonResponse({"error": "Description is required"}, status=400)

            new_todo = create_todo(description)
            return JsonResponse(new_todo, status=201)
        except Exception as exc:
            print(f"[ERROR] POST /todos failed: {exc}")
            return JsonResponse({"error": "Failed to create todo"}, status=500)
