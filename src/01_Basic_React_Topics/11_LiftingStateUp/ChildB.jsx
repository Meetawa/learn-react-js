import React from "react";

const ChildB = (props) => {
  console.log(props.parentAlert);
  const Name = "Rahulsaini";
  return (
    <>
      <h1> Name is : </h1>
      <button onClick={() => props.parentAlert(Name)}>Click</button>
    </>
  );
};

export default ChildB;
