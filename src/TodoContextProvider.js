import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(["Do laundry", "Clean room"]);

  const addNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (todoIndex) => {
    const newTodos = todos.filter((todo, i) => i !== todoIndex);
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, addNewTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext); // -> named export, this need { } to import

export default TodoContextProvider; // -> default export it doesnt need {}
