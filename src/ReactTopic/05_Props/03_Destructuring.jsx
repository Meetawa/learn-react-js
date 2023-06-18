import React from "react";

const Destructuring = (props) => {
  const { active, activeStatus } = props;
  return (
    <div>
      <div className="XYZ">
        <h3> {active} </h3>
      </div>

      <div className="PQR">
        <h1>{activeStatus}</h1>
      </div>
    </div>
  );
};

export default Destructuring;
