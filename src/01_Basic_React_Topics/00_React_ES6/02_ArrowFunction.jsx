import React from "react";

const ArrowFunction = () => {
  return <div>hey this is rahul saini</div>;
};
const ArrowFunctionWithProps = (props) => {
  console.log(props.val);
  return <div>Age is :{props.val}</div>;
};

export { ArrowFunction, ArrowFunctionWithProps };
