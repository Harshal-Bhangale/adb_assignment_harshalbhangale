// src/app/src/components/TodoList.js

import React from "react";

function TodoList({ todos, isLoading, error }) {
    if (isLoading) {
        return <p className="todo-loading">Loading todos…</p>;
    }

    if (error) {
        return <p className="todo-error">Error: {error}</p>;
    }

    if (!todos.length) {
        return (
            <p className="todo-empty">
                No TODOs yet. Add your first task above.
            </p>
        );
    }

    return (
        <ul className="todo-list">
            {todos.map((todo, index) => (
                <li key={todo.id} className="todo-item">
                    <div className="todo-row">
                        <span className="todo-index">{index + 1}.</span>
                        <span className="todo-text">{todo.description}</span>
                    </div>
                    {todo.created_at && (
                        <span className="todo-meta">
                            Created at:{" "}
                            {new Date(todo.created_at).toLocaleString()}
                        </span>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
