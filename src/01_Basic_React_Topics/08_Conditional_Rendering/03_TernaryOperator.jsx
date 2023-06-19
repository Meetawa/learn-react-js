import React from "react";
import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";

const TernaryOperator = (props) => {
  const isLoggedIn = props.isLoggedIn;
  return (
    <>
      <div>{isLoggedIn ? <UserGreeting /> : <GuestGreeting />}</div>
    </>
  );
};

export default TernaryOperator;
