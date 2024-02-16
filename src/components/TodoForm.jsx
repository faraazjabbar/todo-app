import React, { useState } from "react";
import { useTodoContext } from "../TodoContextProvider";

const TodoForm = () => {
  const { todos, addNewTodo } = useTodoContext();
  const [inputText, setInputText] = useState("");
  const submitTodo = () => {
    addNewTodo(inputText);
    setInputText("");
  };
  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button onClick={submitTodo}>Add</button>

      <h1>Todos Count is: {todos.length}</h1>
    </div>
  );
};

export default TodoForm;
