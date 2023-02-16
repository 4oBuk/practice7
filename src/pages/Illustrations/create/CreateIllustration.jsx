import React from "react";
import PageAccessValidator from "../../../components/PageAccessValidator";
import CreateIllustrationForm from "./CreateIllustrationForm";

const CreateIllustration = () => {
  return (
    <PageAccessValidator>
      <CreateIllustrationForm />
    </PageAccessValidator>
  );
};

export default CreateIllustration;