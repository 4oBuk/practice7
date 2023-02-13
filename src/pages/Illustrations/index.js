import React, { useEffect, useState } from "react";
import Illustration from "./illustration/Illustration";
import { useDispatch, useSelector } from "react-redux";
import { fetchIllustrations } from "../../app/actions/illustration";

const Illustrations = () => {
  // Access the store via the `useContext` hook
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
      {state.componentDidMount && (
        <>
          <h2>list</h2>
          {ills.map((i) => (
            <Illustration illustration={i} />
          ))}
        </>
      )}
    </>
  );
};

export default Illustrations;
