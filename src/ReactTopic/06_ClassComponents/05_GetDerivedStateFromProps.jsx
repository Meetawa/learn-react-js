import React from "react";

class GetDerivedStateFromProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritecolor: "red",
    };
  }
  static getDerivedStateFromProps(props, state) {
    return { favoritecolor: props.favcol };
  }
  render() {
    console.log(this.props.favcol);
    return <h1>my favoritecolor is {this.state.favoritecolor}</h1>;
  }
}

export default GetDerivedStateFromProps;
