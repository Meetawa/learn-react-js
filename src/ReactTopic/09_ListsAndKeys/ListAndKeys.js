import React from "react";
import SimpleExam from "./01_SimpleExample";
import RenderingMultipleComponents from "./02_RenderingMultipleComponents";
import BasicListComponent from "./03_BasicListComponent";
import Keys from "./04_Keys";

const ListAndKeys = () => {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      <SimpleExam />
      <RenderingMultipleComponents />
      <BasicListComponent numbers={numbers} />
      <Keys />
    </div>
  );
};

export default ListAndKeys;
