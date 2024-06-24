import { combineReducers } from "redux";

import setViewDateReducer from "./setViewDate";

const rootReducer = combineReducers({
  setViewDate: setViewDateReducer,
});

export default rootReducer;
