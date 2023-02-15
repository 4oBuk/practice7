import React, { useEffect, useState } from "react";
import {
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getIllustrationById } from "../../../app/actions/illustration";
import { useParams } from "react-router-dom";
import TextField from "../../../components/TextField";

const UpdateIllustration = () => {
  console.log("state");
  const [state, setState] = useState({
    componentDidMont: false,
  });
  const dispatch = useDispatch();
  const slug = useParams();
  useEffect(() => {
    console.log("use effect");
    if (!state.componentDidMont) {
      console.log("mounting");
      dispatch(getIllustrationById(slug.id));
      setState((prevState) => ({
        ...prevState,
        componentDidMont: true,
      }));
    }
  }, []);
  const { requestedIllustration } = useSelector((state) => state.illustrations);
  console.log(requestedIllustration);
  const makeUpdate = (e) => {
    console.log(e.target);
  };
  return (
    <>
      <h2>Update</h2>
      {requestedIllustration != null && (
        <>
          <div>
            <TextField
              id="filled-basic"
              label="User ID"
              variant="filled"
              value={requestedIllustration.artist.id}
            />
          </div>
          <div>
            <FormLabel id="demo-radio-buttons-group-label">
              AI Generated
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={
                requestedIllustration.aiGenerated ? "true" : "false"
              }
              name="radio-buttons-group"
            >
              <FormControlLabel value="true" control={<Radio />} label="True" />
              <FormControlLabel
                value="false"
                control={<Radio />}
                label="False"
              />
            </RadioGroup>
          </div>
          <div>
            <TextField
              id="filled-basic"
              label="Name"
              variant="filled"
              value={requestedIllustration.name}
              onChange={makeUpdate}
            />
          </div>
        </>
      )}
      <Button variant="contained" onClick={makeUpdate}>
        Update
      </Button>
    </>
  );
  //     todo I can use value from request to deside what button to show
  //     and use only one component for form
  //   I can make user id unupdatable in form
};

export default UpdateIllustration;
