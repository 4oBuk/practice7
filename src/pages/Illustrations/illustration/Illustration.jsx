import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { deleteById } from "../../../app/actions/illustration";
// todo move to components folder
const getClasses = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    order: 4,
    width: "70%",
  },
  item: { flexGrow: 1 },
}));
const Illustration = ({ illustration }) => {
  const classes = getClasses();
  const deleteButtonClick = (e, id) => {
    const result = deleteById(id);
    console.log("delete", id);
  };
  return (
    <div className={classes.container}>
      <p className={classes.item}>{illustration.id}</p>
      <p className={classes.item}>{illustration.name}</p>
      <p className={classes.item}>{illustration.aiGenerated ? "yes" : "no"}</p>
      <div className={classes.item}>
        <Link to={`/illustrations/${illustration.id}/edit`}>edit</Link>
        <Button onClick={(e) => deleteButtonClick(e, illustration.id)}>
          delete
        </Button>
      </div>
    </div>
  );
};

export default Illustration;
