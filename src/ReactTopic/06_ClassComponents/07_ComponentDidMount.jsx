import React from "react";

class ComponentDidMount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Colorname: "red",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ Colorname: "blue" });
    }, 2000);
  }
  render() {
    console.log(this.state);
    return <div>my fColor Name is {this.state.Colorname}</div>;
  }
}

export default ComponentDidMount;
