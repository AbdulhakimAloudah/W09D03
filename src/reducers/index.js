import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import signIn from "./login";
import tasksReducer from "./tasks";

const reducers = combineReducers({ signIn, tasksReducer });


const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
