import { combineReducers } from "redux";
import course from "./courseReducer";
import authors from "./authorReducers";

const rootReducer = combineReducers({
  course: course,
  authors: authors,
});

export default rootReducer;
