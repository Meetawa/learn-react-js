import React from "react";

const SimpleExample = () => {
  function Change() {
    let arr = [1, 2, 3, 4, 5];
    console.log(arr);
    let arrDouble = arr.map((num) => {
      return num * 2;
    });
    console.log(arrDouble);
  }

  return (
    <>
      <button onClick={Change}>Click</button>
    </>
  );
};

export default SimpleExample;
