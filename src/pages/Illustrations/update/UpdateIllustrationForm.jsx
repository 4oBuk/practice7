import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import FormControlLabel from "../../../components/FormControlLabel";
import FormLabel from "../../../components/FormLabel";
import Radio from "../../../components/Radio";
import RadioGroup from "../../../components/RadioGroup";
import { useDispatch, useSelector } from "react-redux";
import {
  getIllustrationById,
  updateIllustration,
} from "../../../app/actions/illustration";
import { useParams } from "react-router-dom";
import TextField from "../../../components/TextField";
import CreateIllustration from "../create/CreateIllustration";

const UpdateIllustrationForm = () => {
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
  const { updatedIllustration } = useSelector((state) => state.illustrations);
  const updateAiGenerated = (e) => {
    const value = e.target.value;
    state.updatedIllustration.aiGenerated = JSON.parse(value);
    setState({ ...state });
  };
  const updateName = (e) => {
    state.updatedIllustration.name = e.target.value;
    setState({ ...state });
  };
  const makeUpdate = () => {
    let newIllustration = { ...requestedIllustration };
    newIllustration.userId = requestedIllustration.artist.id;
    newIllustration.name =
      state.updatedIllustration.name ?? requestedIllustration.name;
    newIllustration.aiGenerated =
      state.updatedIllustration.aiGenerated ??
      requestedIllustration.aiGenerated;
    dispatch(updateIllustration(newIllustration));
  };
  if (requestedIllustration != null) {
    return (
      <>
        <h2>Update</h2>
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
              value={requestedIllustration.aiGenerated ? "true" : "false"}
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
        <Button onClick={makeUpdate} variant="contained">
          Update
        </Button>
        {updatedIllustration !== undefined &&
          !updatedIllustration.isUpdated && ( //if illustration wasn't updated
            <div>
              <p>Failed to update</p>
              <p>Check your input data</p>
            </div>
          )}
        {updatedIllustration !== undefined &&
          updatedIllustration.isUpdated && ( //if was updated
            <div>
              <p>
                Illustration updated!
              </p>
            </div>
          )}
      </>
    );
  } else {
    return <CreateIllustration />;
  }
};

export default UpdateIllustrationForm;
