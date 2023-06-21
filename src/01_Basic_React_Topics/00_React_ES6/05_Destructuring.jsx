import React from "react";

//DestructuringArray

const DestructuringArray = () => {
  const vehicles = ["mustang", "f-150", "expedition"];
  // old way
  const car = vehicles[0];
  const truck = vehicles[1];
  const suv = vehicles[2];

  //With destructuring:
  const vehicles1 = ["mustang", "f-150", "expedition"];

  const [car1, truck1, suv1] = vehicles1;
  console.log(vehicles);
  console.log(vehicles1);

  return (
    <>
      <h3> old way</h3>
      <ul>
        <li>{car}</li>
        <li>{truck}</li>
        <li>{suv}</li>
      </ul>
      <h3>With destructuring:</h3>
      <ul>
        <li>{car1}</li>
        <li>{truck1}</li>
        <li>{suv1}</li>
      </ul>
    </>
  );
};

//DestructuringObject

const DestructuringObject = () => {
  return <></>;
};

export { DestructuringArray, DestructuringObject };
