import config from "../../config";
import { fetchDelete, getJson, putJson } from "../../requests";
import {
  ILLUSTRATION_GET_ALL,
  ILLUSTRATION_DELETE,
  ILLUSTRATION_GET_BY_ID,
  ILLUSTRATION_UPDATE,
} from "../constants/actionTypes";

const receiveIllustrations = (illustrations) => ({
  type: ILLUSTRATION_GET_ALL,
  payload: illustrations,
});

const update = (updatedIllustration) => ({
  type: ILLUSTRATION_UPDATE,
  payload: updatedIllustration,
});

const removeIllustration = (data) => ({
  type: ILLUSTRATION_DELETE,
  payload: data,
});

const getIllustration = (data) => ({
  type: ILLUSTRATION_GET_BY_ID,
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

const deleteById = (id) => {
  const { BASE_URL, ILLUSTRATION_DELETE } = config;
  const uri = `${BASE_URL}${ILLUSTRATION_DELETE.replace(":id", id)}`;
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
  return deleteById(id).then((data) => {
    dispatch(removeIllustration(data));
  });
  //   todo add catch method
};

export const getIllustrationById = (id) => (dispatch) => {
  return requestById(id).then((data) => {
    dispatch(getIllustration(data));
  });
};
const requestById = (id) => {
  const { BASE_URL, ILLUSTRATION_GET } = config;
  const uri = `${BASE_URL}${ILLUSTRATION_GET.replace(":id", id)}`;
  return getJson({
    url: uri,
  })
    .then((json) => {
      return {
        illustration: json,
        isFound: true,
      };
    })
    .catch((json) => {
      return {
        message: json,
        isFound: false,
      };
    });
};

const requestUpdate = (updatedIllustration) => {
  const { BASE_URL, ILLUSTRATION_UPDATE } = config;
  const uri = `${BASE_URL}${ILLUSTRATION_UPDATE}`;
  return putJson({ body: updatedIllustration, url: uri })
    .then((json) => {
      return {
        isUpdated: true,
        illustration: json,
      };
    })
    .catch((json) => {
      return {
        isUpdated: false,
        illustration: json,
      };
    });
};

export const updateIllustration = (illustration) => (dispatch) => {
  requestUpdate(illustration).then((data) => {
    dispatch(update(data));
  });
//   todo add catch
};
