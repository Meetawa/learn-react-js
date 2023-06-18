import React from "react";
import InheritanceIndex from "./01_Inheritance/InheritanceIndex";
import CompositionIndex from "./02_Composition/CompositionIndex";

const CompAndInhIndex = () => {
  return (
    <>
      <h1> Inheritance is : </h1>
      <InheritanceIndex />
      <h1> Composition is :</h1>
      <CompositionIndex />
    </>
  );
};

export default CompAndInhIndex;
