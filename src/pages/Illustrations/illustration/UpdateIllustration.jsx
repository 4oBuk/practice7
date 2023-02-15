import React, { useEffect, useReducer, useState } from "react";
import IllustrationForm from "./IllustrationForm";
import { Button } from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import { getIllustrationById } from "../../../app/actions/illustration";
import { useParams } from "react-router-dom";

const UpdateIllustration = () => {
  const [state, setState] = useState({
    componentDidMont: false,
  });
  const dispatch = useDispatch();
  const slug = useParams();
  useEffect(() => {
    if (!state.componentDidMont) {
      dispatch(getIllustrationById(slug.id));
      setState({
        ...state,
        componentDidMont: true
      })
    }
  }, []);
  const { requestedIllustration } = useSelector((state) => state.illustrations);
  console.log(requestedIllustration);
  return (
    <>
      <IllustrationForm illustration={requestedIllustration} />
      <Button variant="contained">Update</Button>
    </>
  );
  //     todo I can use value from request to deside what button to show
  //     and use only one component for form
//   I can make user id unupdatable in form
};

export default UpdateIllustration;
