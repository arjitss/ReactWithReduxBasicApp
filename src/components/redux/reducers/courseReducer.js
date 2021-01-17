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
    case "CREATE_COURSES_SUCCESS":
      state = [...state, { ...action.course }];
      return state;
    case "UPDATE_COURSES_SUCCESS":
      state.map((course) =>
        course.id === action.course ? action.course : course
      );
      return action.course;
    default:
      return state;
  }
}
