import React, { useState } from "react";

const Select = () => {
  const [myCar, setMyCar] = useState("Volvo");
  console.log(myCar);
  const handleChange = (event) => {
    setMyCar(event.target.value);
  };

  return (
    <>
      <h1> Select :</h1>
      <form>
        <select value={myCar} onChange={handleChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </form>
    </>
  );
};

export default Select;
