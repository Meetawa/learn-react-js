import React from "react";

const Age = () => {
  const age_is = 23;
  return <div>{age_is}</div>;
};

const BirthCountry = () => {
  const birth_country = "India";
  return <div>{birth_country}</div>;
};

//export default Age;

// export default BirthCountry; (once we export one component we cannot export another component so there are some rules for exporting )

//Rule 1

/* export { Age, BirthCountry }; */

//rule 2

/* 
export default Age; 
export {BirthCountry};
*/
export default Age;
export { BirthCountry };
