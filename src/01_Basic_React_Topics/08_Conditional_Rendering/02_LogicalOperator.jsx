import React from "react";

const LogicalOperator = (props) => {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 && <h2>You have {cars.length} cars in your garage.</h2>}
    </>
  );
};

export default LogicalOperator;
