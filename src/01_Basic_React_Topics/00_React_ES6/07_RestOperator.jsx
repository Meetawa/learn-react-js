import React from "react";

const RestOperator = () => {
  // Without rest parameter
  function fun(a, b) {
    return a + b;
  }
  console.log(fun(1, 2)); // 3
  console.log(fun(1, 2, 3, 4, 5)); //
  return <div></div>;
};

export default RestOperator;
