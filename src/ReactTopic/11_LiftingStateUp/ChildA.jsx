import React from "react";
import ChildB from "./ChildB";

const ChildA = () => {
  const nameIS = "Rahul Saini";
  function parentAlert() {
    alert("hello");
  }
  return (
    <>
      <ChildB parentAlert={parentAlert} />
    </>
  );
};

export default ChildA;
