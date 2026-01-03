import React from "react";

function TodoList({ todos, handleComplete }) {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>

            <button
              onClick={() => handleComplete(todo.id)}
              disabled={todo.completed}
              style={{
                display: todo.completed ? "none" : "inline-block",
              }}
            >
              Complete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
