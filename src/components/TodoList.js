import React from "react";

function TodoList({
  done1,
  done2,
  done3,
  setDone1,
  setDone2,
  setDone3
}) {
  return (
    <div>
      <h2>Child Component</h2>

      <ul>
        <li>
          Learn React
          {!done1 && (
            <button onClick={() => setDone1(true)}>
              Complete
            </button>
          )}
        </li>

        <li>
          Build a React app
          {!done2 && (
            <button onClick={() => setDone2(true)}>
              Complete
            </button>
          )}
        </li>

        <li>
          Deploy the React app
          {!done3 && (
            <button onClick={() => setDone3(true)}>
              Complete
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}

export default TodoList;
