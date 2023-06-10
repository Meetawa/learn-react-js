import React from "react";
import SimpleForm from "./01_SimpleForm";
import HandlingForms from "./02_HandlingForms";
import SubmittingForms from "./03_SubmittingForms";
import MultipleInputFields from "./04_MultipleInputFields";
import TextArea from "./05_TextArea";
import Select from "./06_Select";

const FormIndex = () => {
  return (
    <>
      <SimpleForm />
      <HandlingForms />
      <SubmittingForms />
      <MultipleInputFields />
      <TextArea />
      <Select />
    </>
  );
};

export default FormIndex;
