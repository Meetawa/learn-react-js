import React from "react";
import Fruit from "./01_FunctionComponents";
import Car from "./02_ClassComponents";

const PropsIndex = () => {
  const fname = { name: "Mongo", color: "yellow" };
  const Cname = { name1: "red", name2: "white", name3: "blue" };
  return (
    <div>
      <Fruit details={fname} />
      <Car carDetails={Cname} />
    </div>
  );
};

export default PropsIndex;
