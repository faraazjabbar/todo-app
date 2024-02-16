import React from "react";
import { useMyContext } from "./MyContextProvider";

const MyComponent = (props) => {
  const { data, setData } = useMyContext();
  const changeText = () => {
    setData("Hello React");
  };

  return (
    <div>
      <button onClick={changeText}>Change text</button>
      <h1> My Component says, {data}</h1>
    </div>
  );
};

export default MyComponent;
