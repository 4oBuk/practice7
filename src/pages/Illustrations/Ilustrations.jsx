import React, { useEffect, useState } from "react";
import Illustration from "./illustration/Illustration";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteIllustration,
  fetchIllustrations,
} from "../../app/actions/illustration";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { ILLUSTRATION_EDIT, ILLUSTRATION_NEW } from "../../constants/pages";

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
  const classes = getClasses();
  const [state, setState] = useState({
    componentDidMount: false,
  });
  const deleteButtonClick = (e, id) => {
    dispatch(deleteIllustration(id));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (!state.componentDidMount) {
      dispatch(fetchIllustrations());
      setState((prevState) => ({
        ...prevState,
        componentDidMount: true,
      }));
    }
  }, [state.componentDidMount, dispatch]);
  const ills = useSelector((state) => state.illustrations).illustrations;
  return (
    <>
      <div >
        <Link to={`/${ILLUSTRATION_NEW}`}>Add</Link>
        <h2>Illustrations</h2>
      </div>
      <div className={classes.container}>
        <p className={classes.item}>ID</p>
        <p className={classes.item}>Name</p>
        <p className={classes.item}>AI Generated</p>
        <p className={classes.item}></p>
      </div>
      {state.componentDidMount && (
        <>
          {ills.map((i) => (
            <div className={classes.container} key={i.id}>
              <Illustration illustration={i} />
              <div className={classes.item}>
                <Link to={`${ILLUSTRATION_EDIT}`.replace(":id", i.id)}>
                  edit
                </Link>
                <Button onClick={(e) => deleteButtonClick(e, i.id)}>
                  delete
                </Button>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Illustrations;
