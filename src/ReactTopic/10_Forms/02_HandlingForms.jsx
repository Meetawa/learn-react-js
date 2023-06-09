import React, { useState } from "react";

const HandlingForms = () => {
  const [name, setName] = useState("");

  return (
    <>
      <h1>HandlingForms :</h1>
      <h1>{name}</h1>
      <form>
        <label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    </>
  );
};

export default HandlingForms;
