import { combineReducers } from "redux";

import reducer from "./reducer";
import illustrationsReducer from "./reducer";

export default combineReducers({
  reducer: reducer,
  illustrations: illustrationsReducer,
});
