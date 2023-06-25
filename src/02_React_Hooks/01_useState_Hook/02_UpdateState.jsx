import React, { useState } from "react";

const DeclareState = () => {
  const [color, setColor] = useState("red");
  return (
    <div>
      color name is : {color}
      <button onClick={() => setColor("green")}></button>
    </div>
  );
};

export default DeclareState;
