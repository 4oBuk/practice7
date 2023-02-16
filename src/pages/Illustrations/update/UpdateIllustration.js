import React from "react";
import PageAccessValidator from "../../../components/PageAccessValidator";
import UpdateIllustrationForm from "./UpdateIllustrationForm";

const UpdateIllustration = () => {
  return (
    <PageAccessValidator>
      <UpdateIllustrationForm />
     </PageAccessValidator>
  );
};

export default UpdateIllustration;
