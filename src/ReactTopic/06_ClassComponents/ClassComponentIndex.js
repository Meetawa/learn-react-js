import React from "react";
import ClassConstructor from "./01_Mounting/01_ClassConstructor";
import PropsInConstructor from "./03_PropsInConstructor";
import States, { Car } from "./04_ClassComponentState";
import GetDerivedStateFromProps from "./01_Mounting/02_GetDerivedStateFromProps";
import RenderMethod from "./01_Mounting/03_RenderMethod";
import ComponentDidMount from "./01_Mounting/04_ComponentDidMount";
const ClassComponentIndex = () => {
  return (
    <>
      <ClassConstructor />
      <PropsInConstructor model="Mustang" />
      <States />
      <Car />
      <GetDerivedStateFromProps favcol="yellow" />
      <RenderMethod />
      <ComponentDidMount />
    </>
  );
};

export default ClassComponentIndex;
