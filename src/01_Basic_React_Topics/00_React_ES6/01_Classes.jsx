import React from "react";

const Classes = () => {
  class Car {
    constructor(name) {
      this.brand = name;
    }

    present() {
      return "I have a " + this.brand;
    }
  }

  const mycar = new Car("Ford");
  mycar.present();
  return <div></div>;
};

export default Classes;
