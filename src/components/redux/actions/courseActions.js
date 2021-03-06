import * as courseApi from "../../../api/courseApi";
import { beginAPIcall, endAPICall } from "./beginAPIcall";

export function createCourse(course) {
  debugger;
  console.log("inaction - Create course");
  return { type: "CREATE_COURSE", course: course };
}

export function loadCoursesSuccess(course) {
  return { type: "LOAD_COURSES_SUCCESS", course: course };
}

export function createCoursesSuccess(course) {
  return { type: "CREATE_COURSES_SUCCESS", course: course };
}

export function updateCoursesSuccess(course) {
  return { type: "UPDATE_COURSES_SUCCESS", course: course };
}

export function loadCourses() {
  return function (dispatch, getState) {
    dispatch(beginAPIcall());
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        dispatch(endAPICall());
        throw error;
      });
  };
}

export function saveCourses(courseData) {
  return function (dispatch, getState) {
    dispatch(beginAPIcall());
    return courseApi
      .saveCourse(courseData)
      .then((savedcourses) => {
        courseData.id
          ? dispatch(updateCoursesSuccess(savedcourses))
          : dispatch(createCoursesSuccess(savedcourses));
      })
      .catch((error) => {
        dispatch(endAPICall());
        throw error;
      });
  };
}
