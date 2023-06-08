import React from "react";

const RenderingMultipleComponents = () => {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number, key) => <li>{number}</li>);

  console.log(numbers);
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

export default RenderingMultipleComponents;
