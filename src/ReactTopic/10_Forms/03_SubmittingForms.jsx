import React, { useState } from "react";

const SubmittingForms = () => {
  const [data, setData] = useState("");

  return (
    <>
      <h1>SubmittingForms :r</h1>
      <form>
        <label>
          LOGIN FORM :<br></br>
          <input type="text" onChange={(e) => setData(e.target.value)} />
        </label>
      </form>
    </>
  );
};

export default SubmittingForms;
