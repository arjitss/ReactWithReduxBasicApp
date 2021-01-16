import * as authorApi from "../../../api/authorApi";

export function loadAuthorsSuccess(authors) {
  console.log("inaction", authors);
  return { type: "LOAD_AUTHORS_SUCCESS", authors: authors };
}

export function LoadAuthors() {
  return function (dispatch) {
    return authorApi
      .getAuthors()
      .then((authors) => dispatch(loadAuthorsSuccess(authors)))
      .catch((error) => {
        throw error;
      });
  };
}
