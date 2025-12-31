import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a React app", completed: false },
    { id: 3, text: "Deploy the React app", completed: false },
  ]);

  function handleComplete(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  }

  // 🔑 Check if ANY todo is completed
  const anyCompleted = todos.some((t) => t.completed);

  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList
        todos={todos}
        handleComplete={handleComplete}
        anyCompleted={anyCompleted}
      />
    </div>
  );
}

export default App;
