import React, { useState } from "react";

const DeclareState = () => {
  const [color] = useState("red");
  return <div>color name is : {color}</div>;
};

export default DeclareState;
