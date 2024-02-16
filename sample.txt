import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

// Conditionals
// Lists
// Api call
// Context api

// const isLoggedIn = true;
// const isAdmin = false;

function App() {
  let [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}{" "}
          {todo.isCompleted ? (
            <></>
          ) : (
            <svg
              fill="#000000"
              width="20px"
              height="20px"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1827.701 303.065 698.835 1431.801 92.299 825.266 0 917.564 698.835 1616.4 1919.869 395.234z"
                fill-rule="evenodd"
              />
            </svg>
          )}
        </li>
      ))}
    </ul>
  );
}

export default App;
