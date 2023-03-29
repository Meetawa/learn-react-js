/*  
  -it is used to perform side effects in function Components(settimer,DOM update, fetch data)
*/
import React, { useState, useEffect } from "react";

const UseEffectComponents = () => {
  const [count, setCount] = useState(0);
  const Onupdate = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("rahulsaini");
  });
  return (
    <div>
      <h1>State : {count}</h1>
      <button onClick={Onupdate}>Click </button>
    </div>
  );
};

export default UseEffectComponents;
