import React from "react";
import Fruit from "./01_FunctionComponents";

const PropsIndex = () => {
  const fname = { name: "Mongo", color: "yellow" };
  return (
    <div>
      <Fruit details={fname} />
    </div>
  );
};

export default PropsIndex;
