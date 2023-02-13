import React from "react";
import { Button } from "@material-ui/core";
// todo move to components folder
const Illustration = ({ illustration }) => {
  return (
    <>
      <div>
        <p>{illustration.name}</p>
        <p>{illustration.aiGenerated ? "yes" : "no"}</p>
        <Button onClick={editButtonClick}>edit</Button>
        <br />
        <Button onClick={deleteButtonClick}>delete</Button>
      </div>
    </>
  );
};
const editButtonClick = () => {

};
const deleteButtonClick = () => {};

export default Illustration;
