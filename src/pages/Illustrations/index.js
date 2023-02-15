import React, {useEffect, useState} from "react";
import Illustration from "./illustration/Illustration";
import { useDispatch, useSelector } from "react-redux";
import { deleteIllustration, fetchIllustrations } from "../../app/actions/illustration";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

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
  // useSelector((state) => state.illustrations).illustrations,
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
            <div className={classes.container}>
              <Illustration illustration={i} key={i.id} />
              <div className={classes.item}>
                <Link to={`/illustrations/${i.id}/edit`}>edit</Link>
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
