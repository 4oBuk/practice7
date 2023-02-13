import React from "react";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";

import App from "./containers/App.jsx";
import userReducer from "./reducers/user";
import illustrationsReducer from "./reducers/illustration";

const rootReducer = combineReducers({
  user: userReducer,
  illustrations: illustrationsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
