import React from "react";
//Using key
const Keys = () => {
  const numbers = [1, 2, 3, 4, 5];
  const DoubleNumbers = numbers.map((num) => {
    return <li key={num.toString()}>{num * 10}</li>;
  });
  const todos = [
    {
      text: "Rahul Saini",
    },
    {
      text: "Ashish Saini",
    },
    {
      text: "Madhu Saini",
    },
    {
      text: "Sona Saini",
    },
    {
      text: "Priyanka Saini",
    },
  ];
  const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
  //When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort
  const todoItemss = todos.map((todo, index) => (
    // Only do this if items have no stable IDs
    <li key={index}>{todo.text}</li>
  ));
  return (
    <div>
      <ul>{DoubleNumbers}</ul>
      <ul>{todoItems}</ul>
      <ul>{todoItemss}</ul>
    </div>
  );
};

export default Keys;
