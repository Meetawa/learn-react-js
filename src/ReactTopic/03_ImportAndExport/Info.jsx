//this is way for import components
import React from "react";
import Name from "./Name";

const Info = () => {
  const name = "Rahul Saini";
  return (
    <div>
      <Name />
      {name}
    </div>
  );
};

export default Info;
