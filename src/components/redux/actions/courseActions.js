import * as courseApi from "../../../api/courseApi";

export function createCourse(course) {
  debugger;
  console.log("inaction - Create course");
  return { type: "CREATE_COURSE", course: course };
}

export function loadCoursesSuccess(course) {
  return { type: "LOAD_COURSES_SUCCESS", course: course };
}

export function loadCourses() {
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}
