import React from "react";
import ChildA from "./ChildA";
import TodoApp from "./TodoApp/TodoApp";

const LiftingStateUpIndex = () => {
  return (
    <>
      <h1>TodoApp is :</h1>
      <TodoApp />
      <h1>Example of LiftingStateUp :</h1>
      <ChildA />
    </>
  );
};

export default LiftingStateUpIndex;
