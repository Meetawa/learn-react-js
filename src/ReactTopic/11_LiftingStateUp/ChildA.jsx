import React from "react";
import ChildB from "./ChildB";

const ChildA = () => {
  function parentAlert(props) {
    console.log(props);
    alert(props);
  }
  return (
    <>
      <ChildB parentAlert={parentAlert} />
    </>
  );
};

export default ChildA;
