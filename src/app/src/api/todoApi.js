// src/app/src/api/todoApi.js

const BASE_URL = "http://localhost:8000";

export async function fetchTodos() {
    const response = await fetch(`${BASE_URL}/todos`);

    if (!response.ok) {
        let message = "Failed to fetch todos";
        try {
            const data = await response.json();
            if (data && data.error) message = data.error;
        } catch (e) {

        }
        throw new Error(message);
    }

    const data = await response.json();
    return data.todos || [];
}

export async function createTodo(description) {
    const response = await fetch(`${BASE_URL}/todos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ description }),
    });

    if (!response.ok) {
        let message = "Failed to create todo";
        try {
            const data = await response.json();
            if (data && data.error) message = data.error;
        } catch (e) {

        }
        throw new Error(message);
    }

    return response.json();
}
