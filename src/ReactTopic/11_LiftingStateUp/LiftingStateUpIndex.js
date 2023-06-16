import React from "react";
import TodoCount from "./TodoApp/TodoCount";
import TodoList from "./TodoApp/TodoList";
import AddTodo from "./TodoApp/AddTodo";

const LiftingStateUpIndex = () => {
  return (
    <>
      <TodoCount />
      <TodoList />
      <AddTodo />
    </>
  );
};

export default LiftingStateUpIndex;
