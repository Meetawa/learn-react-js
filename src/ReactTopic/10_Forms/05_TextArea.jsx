import React, { useState } from "react";

const TextArea = () => {
  const [textarea, setTextarea] = useState(
    "Rahul Saini is a Software Engineer,he is looking for a job "
  );
  const handleChange = (event) => {
    setTextarea(event.target.value);
    console.log(event.target.value);
  };
  return (
    <>
      <h1>TextArea :</h1>
      <textarea value={textarea} onChange={handleChange} />
    </>
  );
};

export default TextArea;
