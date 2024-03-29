import React from "react";
import ClassConstructor from "./LifeCycle_Methods/01_Mounting/01_ClassConstructor";
import PropsInConstructor from "./03_PropsInConstructor";
import States, { Car } from "./04_ClassComponentState";
import GetDerivedStateFromProps from "./LifeCycle_Methods/01_Mounting/02_GetDerivedStateFromProps";
import RenderMethod from "./LifeCycle_Methods/01_Mounting/03_RenderMethod";
import ComponentDidMount from "./LifeCycle_Methods/01_Mounting/04_ComponentDidMount";
import Header from "./LifeCycle_Methods/02_Updating/1_GetDerivedStateFromProps";
import ShouldComponentUpdate from "./LifeCycle_Methods/02_Updating/2_ShouldComponentUpdate";
import RenderUpdating from "./LifeCycle_Methods/02_Updating/3_RenderUpdating";
import GetSnapshotBeforeUpdate from "./LifeCycle_Methods/02_Updating/4_GetSnapshotBeforeUpdate";
import ComponentDidUpdate from "./LifeCycle_Methods/02_Updating/5_ComponentDidUpdate";
import ComponentWillUnmount from "./LifeCycle_Methods/03_Unmounting/1_ComponentWillUnmount";
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
      <ShouldComponentUpdate />
      <RenderUpdating />
      <GetSnapshotBeforeUpdate />
      <ComponentDidUpdate />
      <ComponentWillUnmount />
    </>
  );
};

export default ClassComponentIndex;
