import {
  ILLUSTRATION_GET_ALL,
  ILLUSTRATION_GET_BY_ID,
  ILLUSTRATION_DELETE,
  ILLUSTRATION_UPDATE,
  ILLUSTRATION_ADD,
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
      // if illustration was deleted
      if (action.payload.isDeleted) {
        return {
          ...state,
          illustrations: state.illustrations.filter(
            (i) => i.id !== action.payload.id
          ),
        };
      }
      return {
        ...state,
      };
    }
    case ILLUSTRATION_GET_BY_ID: {
      const found = action.payload.isFound;
      return {
        ...state,
        requestedIllustration: found ? action.payload.illustration : null,
      };
    }
    case ILLUSTRATION_UPDATE: {
      const isUpdated = action.payload.isUpdated;
      return {
        ...state,
        updatedIllustration: {
          isUpdated: isUpdated,
          illustration: isUpdated ? action.payload.illustration : {},
        },
      };
    }
    case ILLUSTRATION_ADD: {
      const created = action.payload.created;
      return {
        ...state,
        createdIllustration: {
          created: created,
          illustration: created ? action.payload.illustration : {},
        },
      };
    }
    default:
      return state;
  }
}
