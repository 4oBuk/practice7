import config from "../../config";
import { getJson } from "../../requests";
import { ILLUSTRATION_GET_ALL } from "../constants/actionTypes";

const receiveIllustrations = (illustrations) => ({
  type: ILLUSTRATION_GET_ALL,
  payload: illustrations
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
