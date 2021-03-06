import * as authorApi from "../../../api/authorApi";
import { beginAPIcall, endAPICall } from "./beginAPIcall";

export function loadAuthorsSuccess(authors) {
  console.log("inaction", authors);
  return { type: "LOAD_AUTHORS_SUCCESS", authors: authors };
}

export function LoadAuthors() {
  return function (dispatch) {
    dispatch(beginAPIcall());
    return authorApi
      .getAuthors()
      .then((authors) => dispatch(loadAuthorsSuccess(authors)))
      .catch((error) => {
        dispatch(endAPICall());
        throw error;
      });
  };
}
