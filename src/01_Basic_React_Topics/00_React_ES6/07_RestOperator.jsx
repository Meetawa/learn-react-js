import React from "react";

const RestOperator = () => {
  // Without rest parameter
  function fun(a, b) {
    return a + b;
  }
  console.log(fun(1, 2)); // 3
  console.log(fun(1, 2, 3, 4, 5)); //

  // With rest parameter

  function fun1(...input) {
    let sum = 0;
    for (let i of input) {
      sum += i;
    }
    return sum;
  }
  console.log(fun1(1, 2)); //3
  console.log(fun1(1, 2, 3)); //6
  console.log(fun1(1, 2, 3, 4, 5)); //15
  return <div></div>;
};

export default RestOperator;
