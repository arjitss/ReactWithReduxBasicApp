import { combineReducers } from "redux";
import course from "./courseReducer";
import authors from "./authorReducers";
import apiCallsInProgress from "./apiStatusReducers";

const rootReducer = combineReducers({
  course: course,
  authors: authors,
  apiCallsInProgress: apiCallsInProgress,
});

export default rootReducer;
