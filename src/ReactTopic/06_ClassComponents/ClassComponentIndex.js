import React from "react";
import ClassConstructor from "./02_ClassConstructor";
import PropsInConstructor from "./03_PropsInConstructor";
import States from "./04_ClassComponentState";

const ClassComponentIndex = () => {
  return (
    <>
      <ClassConstructor />
      <PropsInConstructor model="Mustang" />
      <States />
    </>
  );
};

export default ClassComponentIndex;
