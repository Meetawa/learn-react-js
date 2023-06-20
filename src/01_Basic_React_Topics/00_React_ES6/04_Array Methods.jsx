import React from "react";

const ArrayMethods = () => {
  // 1.Map()
  const Numbers = [1, 2, 3, 4, 5];
  const NewNumbers = Numbers.map((num) => {
    return num * 4;
  });
  return (
    <>
      <h3>Map</h3>
      {NewNumbers}
    </>
  );
};

export default ArrayMethods;
