import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [done1, setDone1] = useState(false);
  const [done2, setDone2] = useState(false);
  const [done3, setDone3] = useState(false);

  return (
    <div>
      <h1>Parent Component</h1>

      <TodoList
        done1={done1}
        done2={done2}
        done3={done3}
        setDone1={setDone1}
        setDone2={setDone2}
        setDone3={setDone3}
      />
    </div>
  );
}

export default App;
