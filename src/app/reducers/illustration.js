import {
  ILLUSTRATION_GET_ALL,
  ILLUSTRATION_GET_BY_ID,
  ILLUSTRATION_DELETE,
  ILLUSTRATION_UPDATE,
} from "../constants/actionTypes";
import { act } from "react-dom/test-utils";

const initialState = {
  illustrations: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ILLUSTRATION_GET_ALL: {
      const { payload } = action;
      return {
        ...state,
        illustrations: payload,
      };
    }
    case ILLUSTRATION_DELETE: {
      return {
        ...state,
        // todo: rewrite this
        illustrations: state.illustrations.filter(
          (i) => i.id !== action.payload.id
        ),
      };
    }
    case ILLUSTRATION_GET_BY_ID: {
      const found = action.payload.isFound;
      console.log(found ? null : action.payload.illustration);
      return {
        ...state,
        requestedIllustration: found ? action.payload.illustration : null,
      };
    }
    default:
      return state;
  }
}
