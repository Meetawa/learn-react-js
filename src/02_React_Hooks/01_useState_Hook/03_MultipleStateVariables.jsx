import React, { useState } from "react";

/* 

const MultipleStateVariables = () => {
  const [age, setAge] = useState(19);
  const [siblingsNum, setSiblingsNum] = useState(10);

  const handleAge = () => setAge(age + 1);
  const handleSiblingsNum = () => setSiblingsNum(siblingsNum + 1);

  return (
    <div>
      <p>Today I am {age} Years of Age</p>
      <p>I have {siblingsNum} siblings</p>

      <div>
        <button onClick={handleAge}>Get older!</button>
        <button onClick={handleSiblingsNum}>More siblings!</button>
      </div>
    </div>
  );
};

*/

//Create a single Hook that holds an object:
const MultipleStateVariables = () => {
  const [state, setState] = useState({ age: 19, siblingsNum: 4 });
  const handleClick = (val) =>
    setState({
      ...state,
      [val]: state[val] + 1,
    });
  const { age, siblingsNum } = state;

  return (
    <div>
      <p>Today I am {age} Years of Age</p>
      <p>I have {siblingsNum} siblings</p>

      <div>
        <button onClick={handleClick.bind(null, "age")}>Get older!</button>
        <button onClick={handleClick.bind(null, "siblingsNum")}>
          More siblings!
        </button>
      </div>
    </div>
  );
};

export default MultipleStateVariables;
