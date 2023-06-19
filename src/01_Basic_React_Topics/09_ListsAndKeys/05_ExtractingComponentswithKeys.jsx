import React from "react";

/* function ListItem(props) {
  const value = props.value;
  return (
    // Wrong! There is no need to specify the key here:
    <li key={value.toString()}>{value}</li>
  );
}
const ExtractingComponentswithKeys = (props) => {
  const numbers = props.numbers;
  const listItems = numbers.map((num) => {
    <ListItem value={num} />;
  });
  return <ul>{listItems}</ul>;
}; */

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}
const ExtractingComponentswithKeys = (props) => {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  ));
  return <ul>{listItems}</ul>;
};
export default ExtractingComponentswithKeys;
