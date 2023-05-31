import React from "react";
import ClassConstructor from "./LifeCycle_Methods/01_Mounting/01_ClassConstructor";
import PropsInConstructor from "./03_PropsInConstructor";
import States, { Car } from "./04_ClassComponentState";
import GetDerivedStateFromProps from "./LifeCycle_Methods/01_Mounting/02_GetDerivedStateFromProps";
import RenderMethod from "./LifeCycle_Methods/01_Mounting/03_RenderMethod";
import ComponentDidMount from "./LifeCycle_Methods/01_Mounting/04_ComponentDidMount";
import Header from "./LifeCycle_Methods/02_Updating/1_GetDerivedStateFromProps";
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
      <Header favcol="yellow" />
    </>
  );
};

export default ClassComponentIndex;
