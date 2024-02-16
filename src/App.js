import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoContextProvider from "./TodoContextProvider";

function App() {
  return (
    <TodoContextProvider>
      <div className="container">
        <h1>My Todo List</h1>
        <TodoForm></TodoForm>
        <TodoList></TodoList>
      </div>
    </TodoContextProvider>
  );
}

export default App;
