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
    renderApp();
  } else {
    renderLogin();
  }
  return <div></div>;
};

export default TernaryOperator;
