import React from "react";

//TODO : jsx is way where we add html contain such as tag ,attributes and entities are used in react component without any import file so this jsx is very useful for creating single page application
/* 
  Some Rules:
  -In jsx,we  used html element inside the return statement ,we cannot use  inside function statement
  -In return statement we also used javascript things using  flowerbraket{....}
  -In jsx we need add lot of html tag then, we add into a div tag like (<div>.........</div>) and blank tage like (<>..............</>) .... are  different tags  so we need a parent element in jsx

  Example:

  const IndexJsx = () => {
    //we cannot used any html here only add some function,state and other react hooks ....etc
  return {
  <div>
  <h1>{using this bracket if used any javascript code without any problems}</h1>
  <form></form>
  ...........other html elements
  </div>
  }
};



*/
const JsxIndex = () => {
  const name = "rahulsaini";
  let about =
    "i am a frontend developer so i have strong knowledge in html,css,javascript and also good idea in React js libaray";
  return (
    <div>
      <h1>{name}</h1>
      <p>{about}</p>
    </div>
  );
};

export default JsxIndex;

//this is all about jsx in react
//thank you this is rahul saini
