import config from "../../config";
import { fetchDelete, getJson, postJson, putJson } from "../../requests";
import {
  ILLUSTRATION_GET_ALL,
  ILLUSTRATION_DELETE,
  ILLUSTRATION_GET_BY_ID,
  ILLUSTRATION_UPDATE,
  ILLUSTRATION_ADD,
} from "../constants/actionTypes";

const doDispatch = (type, data) => ({
  type: type,
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
    return [];
  });
};
export const fetchIllustrations = () => (dispatch) => {
  return getIllustrations({
    dispatch,
  }).then((illustrations) => {
    dispatch(doDispatch(ILLUSTRATION_GET_ALL, illustrations));
  });
};

export const deleteIllustration = (id) => (dispatch) => {
  return deleteById(id).then((data) => {
    dispatch(doDispatch(ILLUSTRATION_DELETE, data));
  });
};

export const getIllustrationById = (id) => (dispatch) => {
  return requestById(id).then((data) => {
    dispatch(doDispatch(ILLUSTRATION_GET_BY_ID, data));
  });
};

export const updateIllustration = (illustration) => (dispatch) => {
  requestUpdate(illustration).then((data) => {
    dispatch(doDispatch(ILLUSTRATION_UPDATE, data));
  });
};

export const createIllustration = (newIllustration) => (dispatch) => {
  addIllustration(newIllustration).then((data) => {
    dispatch(doDispatch(ILLUSTRATION_ADD, data));
  });
};

const requestById = (id) => {
  const { BASE_URL, ILLUSTRATION_GET } = config;
  const url = `${BASE_URL}${ILLUSTRATION_GET.replace(":id", id)}`;
  return getJson({
    url: url,
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
  const url = `${BASE_URL}${ILLUSTRATION_UPDATE}`;
  return putJson({ body: updatedIllustration, url: url })
    .then((json) => {
      return {
        isUpdated: true,
        illustration: json,
      };
    })
    .catch((json) => {
      return {
        isUpdated: false,
        message: json,
      };
    });
};

const addIllustration = (illustration) => {
  const { BASE_URL, ILLUSTRATION_CREATE } = config;
  const url = `${BASE_URL}${ILLUSTRATION_CREATE}`;
  return postJson({
    body: illustration,
    url: url,
  })
    .then((json) => {
      return {
        created: true,
        illustration: json,
      };
    })
    .catch((json) => {
      return {
        created: false,
        message: json,
      };
    });
};

const deleteById = (id) => {
  const { BASE_URL, ILLUSTRATION_DELETE } = config;
  const url = `${BASE_URL}${ILLUSTRATION_DELETE.replace(":id", id)}`;
  return fetchDelete({
    url: url,
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
