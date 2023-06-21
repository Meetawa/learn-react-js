import React from "react";

const TernaryOperator = () => {
  //without Ternary Operator
  const authenticated = true;
  function renderApp() {
    console.log("render app");
  }
  function renderLogin() {
    console.log("render login");
  }
  if (authenticated) {
    //render app

    renderApp();
  } else {
    renderLogin();
  }

  //with Ternary Operator
  authenticated ? renderApp() : renderLogin(); //render app
  return <div></div>;
};

export default TernaryOperator;
