import React, { useEffect, useState } from "react";
import Illustration from "./illustration/Illustration";
import { useDispatch, useSelector } from "react-redux";
import { fetchIllustrations } from "../../app/actions/illustration";
import { makeStyles } from "@material-ui/core/styles";

const getClasses = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  table: {
    width: "50%",
  },
  tableElement: {
    textAlign: "center",
  },
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
      <h2>Illustrations</h2>
      <table className={classes.table}>
        <tr>
          <th className={classes.tableElement}>ID</th>
          <th className={classes.tableElement}>Name</th>
          <th className={classes.tableElement}>AI Generated</th>
          <th className={classes.tableElement}></th>
        </tr>
        {state.componentDidMount && (
          <>
            {ills.map((i) => (
              <Illustration illustration={i} key={i.id} />
            ))}
          </>
        )}
      </table>
    </>
  );
};

export default Illustrations;
