import React from "react";

const SpreadOperator = () => {
  const Array1 = [1, 2, 3];
  const Array2 = [4, 5, 6];

  const TotalArray = [...Array1, ...Array2];
  console.log(TotalArray); //1, 2, 3, 4, 5, 6

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
  console.log(myUpdatedVehicle); //brand: 'Ford', model: 'Mustang', color: 'yellow', type: 'car', year: 2021
  return <></>;
};

export default SpreadOperator;
