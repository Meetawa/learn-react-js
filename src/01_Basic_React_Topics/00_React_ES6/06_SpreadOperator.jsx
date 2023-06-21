import React from "react";

const SpreadOperator = () => {
  const Array1 = [1, 2, 3];
  const Array2 = [4, 5, 6];

  const TotalArray = [...Array1, ...Array2];

  const myVehicle = {
    brand: "Ford",
    model: "Mustang",
    color: "red",
  };

  const updateMyVehicle = {
    type: "car",
    year: 2021,
    color: "yellow",
  };

  const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };

  return (
    <>
      <h2>Array Elements are : {TotalArray}</h2>
      <h2>{console.log(myUpdatedVehicle)}</h2>
    </>
  );
};

export default SpreadOperator;
