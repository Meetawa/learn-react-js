import React from "react";
import SimpleForm from "./01_SimpleForm";
import HandlingForms from "./02_HandlingForms";
import SubmittingForms from "./03_SubmittingForms";
import MultipleInputFields from "./04_MultipleInputFields";
import TextArea from "./05_TextArea";

const FormIndex = () => {
  return (
    <>
      <SimpleForm />
      <HandlingForms />
      <SubmittingForms />
      <MultipleInputFields />
      <TextArea />
    </>
  );
};

export default FormIndex;
