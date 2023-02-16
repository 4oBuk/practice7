import React, { useEffect, useState } from "react";
import {
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {getIllustrationById, updateIllustration} from "../../../app/actions/illustration";
import { useParams } from "react-router-dom";
import TextField from "../../../components/TextField";

const UpdateIllustration = () => {
  const [state, setState] = useState({
    componentDidMont: false,
    updatedIllustration: {},
  });
  const dispatch = useDispatch();
  const slug = useParams();
  useEffect(() => {
    if (!state.componentDidMont) {
      dispatch(getIllustrationById(slug.id));
      setState((prevState) => ({
        ...prevState,
        componentDidMont: true,
        updatedIllustration: { id: slug.id },
      }));
    }
  }, []);
  const { requestedIllustration } = useSelector((state) => state.illustrations);
  const updateAiGenerated = (e) => {
    const value = e.target.value;
    state.updatedIllustration.aiGenerated = JSON.parse(value);
    setState({ ...state });
  };
  const updateName = (e) => {
    // I can put name of field as param and use only one function
    const value = e.target.value;
    state.updatedIllustration.name = value;
    setState({ ...state });
  };
  const makeUpdate = (e) => {
    // const update = {...requestedIllustration,}
    // todo refactor it, create copy of updated and change it;
    state.updatedIllustration.userId = requestedIllustration.artist.id;
    state.updatedIllustration.name = state.updatedIllustration.name ?? requestedIllustration.name;
    state.updatedIllustration.aiGenerated = state.updatedIllustration.aiGenerated ?? requestedIllustration.aiGenerated;
    console.log(state.updatedIllustration);
    dispatch(updateIllustration(state.updatedIllustration));
  };
  return (
    <>
      <h2>Update</h2>
      {requestedIllustration != null && (
        <>
          <div>
            <TextField
              id="outlined-read-only-input"
              label="User ID"
              name="userId"
              variant="filled"
              value={requestedIllustration.artist.id}
            />
          </div>
          <div>
            <FormLabel id="demo-radio-buttons-group-label">
              AI Generated
            </FormLabel>
            <RadioGroup
              id="aiGenerated"
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={
                requestedIllustration.aiGenerated ? "true" : "false"
              }
              name="aiGenerated"
              onChange={updateAiGenerated}
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
              name="illustrationName"
              variant="filled"
              defaultValue={requestedIllustration.name}
              onChange={updateName}
            />
          </div>
        </>
      )}
      <Button onClick={makeUpdate} variant="contained">
        Update
      </Button>
    </>
  );
  //     todo I can use value from request to deside what button to show
  //     and use only one component for form
  //   I can make user id unupdatable in form
};

export default UpdateIllustration;
