//this is way for import components
import React from "react";
import Name from "./Name";
//if export default then import like
/* 
import Age from "./About";
*/

//(Rule 1)if export all component then import like
/* 
import { Age, BirthCountry } from "./About";
 */

//(Rule 2)if export default and also export other component then import like
/*
import Age, { BirthCountry } from "./About";
*/
import Age, { BirthCountry } from "./About";

const Info = () => {
  const name = "Rahul Saini";
  return (
    <div>
      <Name />
      {name}
      <Age />
      <BirthCountry />
    </div>
  );
};

export default Info;
