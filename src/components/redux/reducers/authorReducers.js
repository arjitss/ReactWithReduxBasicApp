import initialState from "./initialState";
export default function authorReducers(state = initialState.authors, action) {
  switch (action.type) {
    case "LOAD_AUTHORS_SUCCESS":
      return action.authors;
    default:
      return state;
  }
}
