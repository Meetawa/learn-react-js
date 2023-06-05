import React from "react";

class GetSnapshotBeforeUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fcolor: "red" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ fcolor: "green" });
    }, 1000);
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.fcolor;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.fcolor;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.fcolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

export default GetSnapshotBeforeUpdate;
