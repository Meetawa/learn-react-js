import React from "react";

class ComponentDidUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 1000);
  }
  componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
      "The update fcolor is " + this.state.favoritecolor;
  }
  render() {
    return (
      <>
        <h1>favoritecolor is : {this.state.favoritecolor}</h1>
        <div id="mydiv"></div>
      </>
    );
  }
}

export default ComponentDidUpdate;
