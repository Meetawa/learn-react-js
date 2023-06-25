import React, { useState } from "react";

const DeclareState = () => {
  const [data] = useState(0);
  return <div>User id is : {data}</div>;
};

export default DeclareState;
