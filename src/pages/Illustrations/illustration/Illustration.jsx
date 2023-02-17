import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const getClasses = makeStyles(() => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "70%",
  },
  item: { flex: 1 },
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
