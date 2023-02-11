import React from "react";
import IllustrationForm from "./IllustrationForm";
import { Button } from "@material-ui/core";

const AddNewIllustrationForm = () => {
  return (
    <>
      <IllustrationForm />
      <Button variant="contained">Add</Button>
    </>
  );
};

export default AddNewIllustrationForm;