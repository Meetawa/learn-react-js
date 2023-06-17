import React from "react";

const ChildB = (props) => {
  return (
    <>
      <h1> Name is : {props.nameIS}</h1>
      <button>Click to changeName</button>
    </>
  );
};

export default ChildB;
