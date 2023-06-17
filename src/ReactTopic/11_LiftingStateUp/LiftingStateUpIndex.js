import React from "react";
import ChildA from "./ChildA";
import TodoApp from "./TodoApp/TodoApp";

const LiftingStateUpIndex = () => {
  return (
    <>
      <TodoApp />
      <ChildA />
    </>
  );
};

export default LiftingStateUpIndex;
