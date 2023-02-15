import config from "../../config";
import { fetchDelete, getJson } from "../../requests";
import {
  ILLUSTRATION_GET_ALL,
  ILLUSTRATION_DELETE,
} from "../constants/actionTypes";

const receiveIllustrations = (illustrations) => ({
  type: ILLUSTRATION_GET_ALL,
  payload: illustrations,
});

const removeIllustration = (data) => ({
  type: ILLUSTRATION_DELETE,
  payload: data,
});

const getIllustrations = () => {
  const { BASE_URL, ILLUSTRATION_GET_ALL } = config;
  return getJson({
    params: {
      name: "",
      aiGenerated: false,
      page: 1,
    },
    url: `${BASE_URL}${ILLUSTRATION_GET_ALL}?name=illustration&aiGenerated=false&page=1`,
  }).catch(() => {
    const data = {
      // todo add test data for failed requests
    };
    return data;
  });
};
export const fetchIllustrations = () => (dispatch) => {
  return getIllustrations({
    dispatch,
  }).then((illustrations) => {
    dispatch(receiveIllustrations(illustrations));
  });
  // .catch(() => dispatch(errorReceiveUser()));
};

export const deleteById = (id) => {
  const { BASE_URL, ILLUSTRATION_DELETE } = config;
  const uri = `${BASE_URL}${ILLUSTRATION_DELETE.replace(":id", id)}`;
  console.log("uri", uri);
  return fetchDelete({
    url: uri,
  })
    .then((response) => {
      return {
        isDeleted: response.ok,
        id: id,
      };
    })
    .catch(() => {
      return {
        isDeleted: false,
        id: id,
      };
    });
};

export const deleteIllustration = (id) => (dispatch) => {
  console.log(dispatch);
  return deleteById(id).then((data) => {
    console.log("data", data);
    dispatch(removeIllustration(data));
  });
};
