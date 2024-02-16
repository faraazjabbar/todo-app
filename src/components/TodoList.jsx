import React from "react";
import { useTodoContext } from "../TodoContextProvider";

const TodoList = () => {
  const { todos, deleteTodo } = useTodoContext();
  const removeTodo = (index) => {
    deleteTodo(index);
  };
  return (
    <div>
      <ul>
        {todos.map((todo, i) => (
          <li key={todo}>
            {todo} <button onClick={() => removeTodo(i)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
