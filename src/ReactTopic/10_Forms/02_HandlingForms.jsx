import React, { useState } from "react";

const HandlingForms = () => {
  const [name, setName] = useState("");

  return (
    <>
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
