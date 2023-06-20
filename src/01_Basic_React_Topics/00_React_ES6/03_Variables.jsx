import React from "react";

const Variables = () => {
  var x = 5.6; //var has a function scope, not a block scope.
  let y = 5.6; //let has a block scope.
  const z = 5.6; //const has a block scope.its value can never change.
  return (
    <ol>
      <li>value of x is :{x}</li>
      <li>value of y is :{y}</li>
      <li>value of z is :{z}</li>
    </ol>
  );
};

export default Variables;
