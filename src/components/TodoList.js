import React from "react";
function TodoList({ todos, handleComplete, anyCompleted }) {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}

            {/* 🔴 IMPORTANT: remove ALL buttons once any is completed */}
            {!anyCompleted && (
              <button onClick={() => handleComplete(todo.id)}>
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
