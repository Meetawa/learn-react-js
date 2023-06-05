import React from "react";

class GetSnapshotBeforeUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fcolor: "red" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ fcolor: "green" });
    });
  }
  render() {
    return <div>rahul ji</div>;
  }
}

export default GetSnapshotBeforeUpdate;
