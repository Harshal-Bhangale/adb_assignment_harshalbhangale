# src/rest/rest/urls.py

from django.contrib import admin
from django.urls import path
from .views import TodoListView

urlpatterns = [
    path("admin/", admin.site.urls),
    # Main todos endpoint - 
    # http://localhost:8000/todos
    path("todos", TodoListView.as_view(), name="todos"),
]
