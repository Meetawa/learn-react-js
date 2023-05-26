import React from "react";
class Car1 extends React.Component {
  render() {
    console.log(this.props.carDetails.name1);
    return (
      <>
        I am <h2>Car !</h2>
      </>
    );
  }
}
class Car2 extends React.Component {
  render() {
    console.log(this.props.carDetails.name1);
    return (
      <>
        I am <h2>Car !</h2>
      </>
    );
  }
}

class Car extends React.Component {
  render() {
    console.log(this.props.carDetails.name1);
    return (
      <>
        I am <h2>Car !</h2>
      </>
    );
  }
}
export default Car;
