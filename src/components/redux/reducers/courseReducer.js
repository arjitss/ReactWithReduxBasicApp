export default function couseReducer(state = [], action) {
  console.log("in course reducer ");
  switch (action.type) {
    case "CREATE_COURSE":
      console.log("reducer", state, action);
      state = [...state, { ...action.course }];
      console.log("reducer", state);
      return state;
    case "LOAD_COURSES_SUCCESS":
      return action.course;
    default:
      return state;
  }
}
