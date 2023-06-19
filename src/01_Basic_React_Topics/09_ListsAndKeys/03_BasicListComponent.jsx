import React from "react";

const BasicListComponent = (props) => {
  console.log(props.numbers);
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

export default BasicListComponent;
