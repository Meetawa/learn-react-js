import React from "react";

const Destructuring = () => {
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
  return <div></div>;
};

export default Destructuring;
