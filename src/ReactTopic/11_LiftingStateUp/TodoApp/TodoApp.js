import React, { useState } from "react";
import TodoCount from "./TodoCount";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const TodoApp = () => {
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

export default TodoApp;
