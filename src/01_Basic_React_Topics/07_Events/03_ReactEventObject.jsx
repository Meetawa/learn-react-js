import React from "react";

const ReactEventObject = () => {
  const shoot = (a, b) => {
    console.log(b);
    console.log(b.type);
    console.log(a);
    /*
        'b' represents the React event that triggered the function,
        in this case the 'click' event
        */
  };

  return (
    <>
      <button onClick={(event) => shoot("Goal!", event)}>click </button>
    </>
  );
};

export default ReactEventObject;
