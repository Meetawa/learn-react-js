import React, { useState } from "react";

const UpdateState = () => {
  const [color, setColor] = useState("red");
  return (
    <div>
      color name is : {color}
      <button onClick={() => setColor("green")}></button>
    </div>
  );
};

export default UpdateState;
