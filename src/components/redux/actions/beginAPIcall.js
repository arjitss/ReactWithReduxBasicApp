import * as actionTypes from "./actionTypes";
export function beginAPIcall() {
  return { type: actionTypes.BEGIN_API_CALL };
}
export function endAPICall() {
  return { type: actionTypes.API_CALL_ERROR };
}
