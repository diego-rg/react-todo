import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, addTodo] = useState([]); //hook para manexar estado

  function setTodo(todo) {
    addTodo([...todos, todo]);//spread para poñer o novo todo en todos
  }

  function deleteTodo(todo) {
    let index = todos.indexOf(todo);//creamos o índice do todo creado para poder selecionalo e eliminalo
    todos.splice(index, 1);
    addTodo([...todos]);
  }

  useEffect(() => {//hook que se executa cando o usuario modifica o estado da app
    console.log("Aplicación actualizada");
  });

  //Todo dentro de un div xa que react solo pode renderizar 1 fillo
  return (
    <div className="App">
      <input type="text" className="input-todo" id="input-todo" placeholder="Tengo que hacer..." size={50}></input>
      <button className="btn-add-todo" onClick={() => {setTodo(document.getElementById("input-todo").value)}}>Añadir</button>
      <ul>
        {todos.map(todo => (
          <div className="todo" key={todo.toString()}>
            <li key={todo.toString()}>{todo}</li>
            <button className="btn-delete-todo" onClick={() => deleteTodo(todo)}>Eliminar</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;