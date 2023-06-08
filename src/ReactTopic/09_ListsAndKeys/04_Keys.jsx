import React from "react";

const Keys = () => {
  const numbers = [1, 2, 3, 4, 5];
  const DoubleNumbers = numbers.map((num) => {
    return <li key={num.toString()}>{num * 10}</li>;
  });
  return (
    <div>
      <ul>{DoubleNumbers}</ul>
    </div>
  );
};

export default Keys;
