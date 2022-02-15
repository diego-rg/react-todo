import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, addTodo] = useState([]); //hook para manexar estado

  function setTodo(todo) {
    addTodo([...todos, todo]);//spread para poñer o novo todo en todos
  }

  useEffect(() => {
    console.log("use effect");
  });

  return (
    <div className="App">
      <input type="text" id="input-todo"></input>
      <button onClick={() => {setTodo(document.getElementById("input-todo").value)}}>Añadir tarea</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.toString()}>{todo}</li>//añadimos as keys que necesita para saber se se modifica o elemento (https://reactjs.org/docs/lists-and-keys.html#keys)
        ))}
      </ul>
    </div>
  );
}

export default App;