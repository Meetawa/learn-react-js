import React from "react";
import ChildB from "./ChildB";

const ChildA = () => {
  const nameIS = "Rahul Saini";
  return (
    <>
      <ChildB nameIS={nameIS} />
    </>
  );
};

export default ChildA;
