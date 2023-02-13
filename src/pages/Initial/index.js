import React from "react";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import withAuthorities from "decorators/withAuthorities";
import Initial from "./containers/Initial";
import reducer from "./reducers/reducer";
import illustrationsReducer from "./reducers/reducer";

const rootReducer = combineReducers({
  reducer,
  illustrations: illustrationsReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default withAuthorities((props) => (
  <Provider store={store}>
    <Initial {...props} />
  </Provider>
));
