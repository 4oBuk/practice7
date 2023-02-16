import React, { useState } from "react";
import {
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import TextField from "../../../components/TextField";
import { useDispatch } from "react-redux";
import { createIllustration } from "../../../app/actions/illustration";

const CreateIllustrationForm = () => {
  const [newIllustration, setNewIllustration] = useState({});

  const dispatch = useDispatch();
  // todo: clear form after adding
  const addIllustration = (e) => {
    // todo add validation
    dispatch(createIllustration(newIllustration));
  };
  const setArtistId = (e) => {
    newIllustration.artistId = parseInt(e.target.value);
    setNewIllustration({ ...newIllustration });
  };
  const setAiGenerated = (e) => {
      const value = e.target.value;
      newIllustration.aiGenerated = JSON.parse(value);
      setNewIllustration({ ...newIllustration });
  };
  const setName = (e) => {
    newIllustration.name = e.target.value;
    setNewIllustration({ ...newIllustration });
  };
  return (
    <>
      <h2>New Illustration</h2>
      <div>
        <TextField
          id="filled-basic"
          label="User ID"
          variant="filled"
          onChange={setArtistId}
        />
      </div>
      <div>
        <FormLabel id="demo-radio-buttons-group-label">AI Generated</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="false"
          name="radio-buttons-group"
          onChange={setAiGenerated}
        >
          <FormControlLabel value="true" control={<Radio />} label="True" />
          <FormControlLabel value="false" control={<Radio />} label="False" />
        </RadioGroup>
      </div>
      <div>
        <TextField
          id="filled-basic"
          label="Name"
          variant="filled"
          onChange={setName}
        />
      </div>
      <Button variant="contained" onClick={addIllustration}>
        Add
      </Button>
    </>
  );
};

export default CreateIllustrationForm;
