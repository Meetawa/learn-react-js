import React from "react";
import SimpleExample from "./01_SimpleExample";
import LogicalOperator from "./02_LogicalOperator";

const ConditionalRendering = () => {
  const cars = ["Ford", "BMW", "Audi"];
  return (
    <>
      <SimpleExample isLoggedIn="true" />
      <LogicalOperator cars={cars} />
    </>
  );
};

export default ConditionalRendering;
