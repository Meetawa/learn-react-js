import React from "react";
import ClassConstructor from "./02_ClassConstructor";
import PropsInConstructor from "./03_PropsInConstructor";
import States, { Car } from "./04_ClassComponentState";
import GetDerivedStateFromProps from "./05_GetDerivedStateFromProps";
import RenderMethod from "./06_RenderMethod";

const ClassComponentIndex = () => {
  return (
    <>
      <ClassConstructor />
      <PropsInConstructor model="Mustang" />
      <States />
      <Car />
      <GetDerivedStateFromProps favcol="yellow" />
      <RenderMethod />
    </>
  );
};

export default ClassComponentIndex;
