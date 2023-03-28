/* 
    - State is a built-in React Object that is used to contain data or information about the component
    - State can be modified based on user action or network changes.
    - Everytime when the state of an object changes,React re-render the Component to the browser
*/

import React from "react";

const StateComponents = () => {
  let x = 100;
  const update = () => {
    x = 14;
  };
  console.log(x);
  return (
    <div>
      <h1>learning tut is {x}</h1>
      <button onClick={update}>click</button>
    </div>
  );
  //so In this Component x value is not update after click the button then we use useSate
};

export default StateComponents;
