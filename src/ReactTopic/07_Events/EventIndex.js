import React from "react";
import SimpleExample from "./01_SimpleExample";
import PassingArguments from "./02_PassingArguments";
import ReactEventObject from "./03_ReactEventObject";
import SyntheticEvent from "./04_SyntheticEvent";
import EventUsingClass from "./06_EventUsingClass";

const EventIndex = () => {
  return (
    <>
      <SimpleExample />
      <br />
      <PassingArguments />
      <br />
      <ReactEventObject />
      <br />
      <SyntheticEvent />
      <br />
      <EventUsingClass />
    </>
  );
};

export default EventIndex;
