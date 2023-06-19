import React from "react";
import Fruit from "./01_FunctionComponents";
import Car from "./02_ClassComponents";
import Destructuring from "./03_Destructuring";

const PropsIndex = () => {
  const fname = { name: "Mongo", color: "yellow" };
  const Cname = { name1: "red", name2: "white", name3: "blue" };
  return (
    <div>
      <Fruit details={fname} />
      <Car carDetails={Cname} />
      <Destructuring active="KAPIL GARG" activeStatus="CSE" />
    </div>
  );
};

export default PropsIndex;
