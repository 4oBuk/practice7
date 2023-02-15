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
  return (
    <>
      <p className={classes.item}>{illustration.id}</p>
      <p className={classes.item}>{illustration.name}</p>
      <p className={classes.item}>{illustration.aiGenerated ? "yes" : "no"}</p>
    </>
  );
};

export default Illustration;
