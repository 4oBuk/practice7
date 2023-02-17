import React, { useState } from "react";
import Button from "../../../components/Button";
import FormControlLabel from "../../../components/FormControlLabel";
import FormLabel from "../../../components/FormLabel";
import Radio from "../../../components/Radio";
import RadioGroup from "../../../components/RadioGroup";
import TextField from "../../../components/TextField";
import { useDispatch, useSelector } from "react-redux";
import { createIllustration } from "../../../app/actions/illustration";
import { ILLUSTRATIONS } from "../../../constants/pages";
import { Link } from "react-router-dom";
import * as PAGES from "../../../constants/pages";
import useLocationSearch from "../../../hooks/useLocationSearch";
import useChangePage from "../../../hooks/useChangePage";

const CreateIllustrationForm = () => {
  const [state, setState] = useState({
    artistId: null,
    name: "",
    aiGenerated: false,
  });

  const locationSearch = useLocationSearch();
  const changePage = useChangePage();
  const dispatch = useDispatch();
  const addIllustration = () => {
    const newIllustration = {
      artistId: state.artistId,
      name: state.name,
      aiGenerated: state.aiGenerated,
    };
    setState({
      aiGenerated: false,
      name: "",
      artistId: null,
    });
    dispatch(createIllustration(newIllustration));
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
    setState((prevState) => {
      return {
        ...prevState,
        aiGenerated: JSON.parse(e.target.value),
      };
    });
  };
  const { createdIllustration } = useSelector((state) => state.illustrations);
  console.log(createdIllustration);
  const setName = (e) => {
    setState((state) => {
      return {
        ...state,
        name: e.target.value,
      };
    });
  };
  if (createdIllustration !== undefined && createdIllustration.created) {
    changePage({
      locationSearch,
      path: `/${PAGES.ILLUSTRATIONS}`,
    });
  }
  return (
    <>
      <h2>New Illustration</h2>
      <div>
        <TextField
          id="filled-basic"
          label="User ID"
          variant="filled"
          onChange={setArtistId}
          value={state.artistId ?? ""}
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
      {createdIllustration !== undefined &&
        !createdIllustration.created && ( //if illustration wasn't created
          <div>
            <p>Enter data about new illustration</p>
            <p>Artist Id: id of existed artist </p>
            <p>Name: cannot be empty</p>
            <p>AI Generated: false by default</p>
          </div>
        )}
    </>
  );
};

export default CreateIllustrationForm;
