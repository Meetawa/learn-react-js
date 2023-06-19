import React from "react";

const FruitColor = (ColorName) => {
  console.log(ColorName.ColorName.details.color);
  return <p>Fruit color is {ColorName.ColorName.details.color}</p>;
};
const Fruit = (details) => {
  console.log(details);
  return (
    <>
      <h1>Name of fruit is {details.details.name}</h1>
      <FruitColor ColorName={details} />
    </>
  );
};

export default Fruit;
