import React from "react";

//component properties should be kept in an object called state.
class ClassConstructor extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}

export default ClassConstructor;
