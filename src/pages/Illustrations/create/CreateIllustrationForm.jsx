import React, { useState } from "react";
import Button from "../../../components/Button";
import FormControlLabel from "../../../components/FormControlLabel";
import FormLabel from "../../../components/FormLabel";
import Radio from "../../../components/Radio";
import RadioGroup from "../../../components/RadioGroup";
import TextField from "../../../components/TextField";
import { useDispatch } from "react-redux";
import { createIllustration } from "../../../app/actions/illustration";
import { ILLUSTRATIONS } from "../../../constants/pages";
import {Link} from "react-router-dom";

const CreateIllustrationForm = () => {
  const [state, setState] = useState({
    artistId: null,
    name: "",
    aiGenerated: false,
  });

  const dispatch = useDispatch();
  const addIllustration = () => {
    // todo add validation

    const newIllustration = {
      artistId: state.artistId,
      name: state.name,
      aiGenerated: state.aiGenerated,
    };
    setState({
      aiGenerated: false,
      name: "",
      artistId: null
    });
    dispatch(createIllustration(newIllustration));
    console.log(newIllustration);
  };
  const setArtistId = (e) => {
    setState((state) => {
      return {
        ...state,
        artistId: parseInt(e.target.value),
      };
    });
  };
  const setAiGenerated = (e) => {
    setState((state) => {
      return {
        ...state,
        aiGenerated: JSON.parse(e.target.value),
      };
    });
  };
  const setName = (e) => {
    setState((state) => {
      return {
        ...state,
        name: e.target.value,
      };
    });
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
          value={state.artistId ?? ''}
        />
      </div>
      <div>
        <FormLabel id="demo-radio-buttons-group-label">AI Generated</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={state.aiGenerated ? "true" : "false"}
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
          value={state.name}
        />
      </div>
      <Button variant="contained" onClick={addIllustration}>
        Add
      </Button>
      <Link to={`/${ILLUSTRATIONS}`}>Cancel</Link>
    </>
  );
};

export default CreateIllustrationForm;
