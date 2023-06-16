import React, { useState } from "react";
import TodoCount from "./TodoApp/TodoCount";
import TodoList from "./TodoApp/TodoList";
import AddTodo from "./TodoApp/AddTodo";

const LiftingStateUpIndex = () => {
  const [todos, setTodos] = useState(["item 1", "item 2", "item 3"]);
  return (
    <>
      <>
        <TodoCount todos={todos} />
        <TodoList todos={todos} />
        <AddTodo setTodos={setTodos} />
      </>
    </>
  );
};

export default LiftingStateUpIndex;
