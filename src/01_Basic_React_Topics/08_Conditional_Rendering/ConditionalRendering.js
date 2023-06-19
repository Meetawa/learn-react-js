import React from "react";
import SimpleExample from "./01_SimpleExample";
import LogicalOperator from "./02_LogicalOperator";
import TernaryOperator from "./03_TernaryOperator";

const ConditionalRendering = () => {
  const cars = ["Ford", "BMW", "Audi"];
  return (
    <>
      <SimpleExample isLoggedIn="true" />
      <LogicalOperator cars={cars} />
      <TernaryOperator isLoggedIn="false" />
    </>
  );
};

export default ConditionalRendering;
