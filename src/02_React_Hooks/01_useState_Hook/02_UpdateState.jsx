import React, { useState } from "react";

const UpdateState = () => {
  const [color, setColor] = useState("red");
  return (
    <div>
      color name is : {color}
      <br />
      <button onClick={() => setColor("green")}>Click</button>
    </div>
  );
};

export default UpdateState;
