import React, { useEffect, useState } from "react";
import Illustration from "./illustration/Illustration";
import { useDispatch, useSelector } from "react-redux";
import { fetchIllustrations } from "../../app/actions/illustration";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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

const Illustrations = () => {
  // Access the store via the `useContext` hook
  const classes = getClasses();
  const [state, setState] = useState({
    componentDidMount: false,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    if (!state.componentDidMount) {
      dispatch(fetchIllustrations());
      setState((prevState) => ({
        ...prevState,
        componentDidMount: true,
      }));
    }
  }, []);
  const ills = useSelector((state) => state.illustrations).illustrations;
  return (
    <>
      <Link to={"/illustrations/new"}>Add</Link>
      <h2>Illustrations</h2>
      <div className={classes.container}>
        <p className={classes.item}>ID</p>
        <p className={classes.item}>Name</p>
        <p className={classes.item}>AI Generated</p>
        <p className={classes.item}></p>
      </div>
      {state.componentDidMount && (
        <>
          {ills.map((i) => (
            <Illustration illustration={i} key={i.id} />
          ))}
        </>
      )}
    </>
  );
};

export default Illustrations;
