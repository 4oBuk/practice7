import React, { useState } from "react";
import { ILLUSTRATION_EDIT } from "../../../constants/pages";
import { Button } from "@material-ui/core";
// todo move to components folder
const Illustration = ({ illustration }) => {
  return (
    <>
      <div>
        <p>{illustration.name}</p>
        <p>{illustration.aiGenerated ? "yes" : "no"}</p>
        <Button onClick={console.log("edit button")}>edit</Button>
        <br />
        <Button onClick={console.log("delete button")}>delete</Button>
      </div>
    </>
  );
};
export default Illustration;
