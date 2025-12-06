

import React, { useState } from "react";

function TodoForm({ onSubmit, isSubmitting }) {
    const [description, setDescription] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const trimmed = description.trim();
        if (!trimmed) return;

        await onSubmit(trimmed);
        setDescription("");
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="todo-input"
                placeholder="Write something you need to get done..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={isSubmitting}
            />
            <button
                type="submit"
                className="todo-button"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Adding..." : "Add TODO"}
            </button>
        </form>
    );
}

export default TodoForm;
