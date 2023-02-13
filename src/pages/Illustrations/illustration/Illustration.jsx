import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// todo move to components folder
const getClasses = makeStyles(() => ({
  table: {
    width: "50%",
  },
  tableElement: {
    textAlign: "center",
  },
}));
const Illustration = ({ illustration }) => {
  const classes = getClasses();
  return (
    <tr>
      <td className={classes.tableElement}>{illustration.id}</td>
      <td className={classes.tableElement}>{illustration.name}</td>
      <td className={classes.tableElement}>{illustration.aiGenerated ? "yes" : "no"}</td>
      <Button onClick={editButtonClick}>edit</Button>
      <Button onClick={deleteButtonClick}>delete</Button>
    </tr>
  );
};
const editButtonClick = () => {};
const deleteButtonClick = () => {};

export default Illustration;
