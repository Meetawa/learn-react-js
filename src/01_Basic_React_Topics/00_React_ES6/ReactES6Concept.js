import React from "react";
import Classes from "./01_Classes";
import { ArrowFunction, ArrowFunctionWithProps } from "./02_ArrowFunction";
import Variables from "./03_Variables";
import ArrayMethods from "./04_Array Methods";
import { DestructuringArray, DestructuringObject } from "./05_Destructuring";
import SpreadOperator from "./06_SpreadOperator";
import RestOperator from "./07_RestOperator";

const ReactES6Concept = () => {
  return (
    <>
      <h1>ReactES6Concept : </h1>
      <h2> 1. Classes :</h2>
      <Classes />

      <h2>2. ArrowFunction : </h2>
      <ArrowFunction />
      <ArrowFunctionWithProps val={"19"} />

      <h2>3. Variables : </h2>
      <Variables />

      <h2>4. ArrayMethods : </h2>
      <ArrayMethods />

      <h2>5.1. DestructuringArray : </h2>
      <DestructuringArray />

      <h2>5.2. DestructuringObject : </h2>
      <DestructuringObject />

      <h2>6. SpreadOperator : </h2>
      <SpreadOperator />

      <h2>7. RestOperator : </h2>
      <RestOperator />
    </>
  );
};

export default ReactES6Concept;
