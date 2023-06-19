import React from "react";

export default class RenderUpdating extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "green" };
  }
  changeColor = () => {
    this.setState({ favoritecolor: "blue" });
  };
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}
