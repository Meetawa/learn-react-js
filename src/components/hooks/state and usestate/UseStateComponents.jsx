/* 
    Rules of Hooks:
    1.must be written inside function components.
    2.must be import in component.
    3.must be call at top level of component
    4.cannot be Conditional
*/
import React from "react";
import { useState } from "react";

const UseStateComponents = () => {
  const [count, setCount] = useState(0);
  const Onupdate = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>State : {count}</h1>
      <button onClick={Onupdate}>Click </button>
    </div>
  );
};

export default UseStateComponents;
