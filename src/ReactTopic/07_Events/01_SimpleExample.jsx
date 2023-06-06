import React from "react";

const SimpleExample = () => {
  const Successful = () => {
    alert("Form Successfully login");
  };
  return (
    <>
      <button onClick={Successful}>Click Button </button>
    </>
  );
};

export default SimpleExample;
