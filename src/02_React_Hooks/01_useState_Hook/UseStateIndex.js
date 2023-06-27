import React from "react";
import DeclareState from "./01_DeclareState";
import UpdateState from "./02_UpdateState";
import MultipleStateVariables from "./03_MultipleStateVariables";

const UseStateIndex = () => {
  return (
    <>
      <h1>Declaration of useState : </h1>
      <DeclareState />
      <h1>UpdateState :</h1>
      <UpdateState />
      <h1>MultipleStateVariables : </h1>
      <MultipleStateVariables />
    </>
  );
};

export default UseStateIndex;
