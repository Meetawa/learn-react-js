import React from "react";

const SimpleExample = () => {
  const Successful = () => {
    alert("Form Successfully login");
  };

  const Forget = () => {
    document.write("password is changed");
  };

  return (
    <>
      {/* This is One way to handle events */}
      <button onClick={Successful}>Click Button </button>
      <br />
      {/* This is One way to handle events */}
      <button onClick={Forget}>Forget password </button>
    </>
  );
};

export default SimpleExample;
