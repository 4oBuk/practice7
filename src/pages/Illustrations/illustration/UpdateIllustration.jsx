import React from "react";
import IllustrationForm from "./IllustrationForm";
import { Button } from "@material-ui/core";

const UpdateIllustration = () => {
    return (
        <>
            <IllustrationForm />
            <Button variant="contained">Update</Button>
        </>
    );
};

export default UpdateIllustration;