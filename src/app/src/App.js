// src/app/src/App.js

import React, { useEffect, useState } from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { fetchTodos, createTodo } from "./api/todoApi";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      setError("");
      setIsLoading(true);
      const data = await fetchTodos();
      setTodos(data);
    } catch (err) {
      setError(err.message || "Failed to load todos");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddTodo = async (description) => {
    try {
      setError("");
      setIsSubmitting(true);
      await createTodo(description);
      await loadTodos();
    } catch (err) {
      setError(err.message || "Failed to add todo");
    } finally {
      setIsSubmitting(false);
    }
  };

  const pendingCount = todos.length;

  return (
    <div className="App">
      <div className="app-shell">
        <header className="app-header">
          <div>
            <h1 className="app-title">Adbrew TODO Dashboard</h1>
            <p className="app-subtitle">
              Simple and Modular Approach Follow
            </p>
          </div>
          <div className="badge">
            {pendingCount} task{pendingCount !== 1 ? "s" : ""} pending
          </div>
        </header>

        <main className="app-main">
          <section className="todo-card">
            <h2 className="section-title">Create a new TODO</h2>
            <TodoForm onSubmit={handleAddTodo} isSubmitting={isSubmitting} />

            {error && (
              <div className="alert alert-error">
                <span>{error}</span>
              </div>
            )}

            <div className="divider" />

            <h2 className="section-title">Your TODOs</h2>
            <TodoList todos={todos} isLoading={isLoading} error={error} />
          </section>
        </main>

        <footer className="app-footer">
          <span>Adbrew Assignment</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
