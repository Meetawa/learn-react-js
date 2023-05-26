import React from "react";
class Car1 extends React.Component {
  render() {
    return <></>;
  }
}
class Car2 extends React.Component {
  render() {
    return <></>;
  }
}

class Car extends React.Component {
  render() {
    console.log(this.props.carDetails);
    return (
      <>
        <h1>Numbers of Car Color :</h1>
        <ul>
          <li>{this.props.carDetails.name1} Car !</li>
          <li>
            <Car1 />
          </li>
          <li>
            <Car2 />
          </li>
        </ul>
      </>
    );
  }
}
export default Car;
