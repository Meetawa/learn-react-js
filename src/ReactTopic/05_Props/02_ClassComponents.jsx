import React from "react";

//declaration of car no. 1
class Car1 extends React.Component {
  render() {
    console.log("car1");

    console.log(this.props.carDetails1.name2);
    return <>{this.props.carDetails1.name2} Car</>;
  }
}
//declaration of car no. 2

class Car2 extends React.Component {
  render() {
    console.log("car2");
    console.log(this.props);

    return <>{this.props.carDetails1.name3} Car</>;
  }
}

//declaration of car no. 0
class Car extends React.Component {
  render() {
    console.log("car0");
    console.log(this.props.carDetails);
    return (
      <>
        <h1>Numbers of Car Color :</h1>
        <ul>
          <li>{this.props.carDetails.name1} Car</li>
          <li>
            <Car1 carDetails1={this.props.carDetails} />
          </li>
          <li>
            <Car2 carDetails1={this.props.carDetails} />
          </li>
        </ul>
      </>
    );
  }
}
export default Car;
