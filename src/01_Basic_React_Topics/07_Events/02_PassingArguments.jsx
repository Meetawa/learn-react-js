import React from "react";

const PassingArguments = () => {
  const Color = (a) => {
    alert(`This is ${a}`);
  };
  return (
    <>
      <button onClick={() => Color("Red")}>Click Color</button>
    </>
  );
};

export default PassingArguments;
