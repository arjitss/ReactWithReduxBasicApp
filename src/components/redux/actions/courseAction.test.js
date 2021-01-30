import * as CourseActions from "./courseActions";
import * as types from "./actionTypes";
import { courses } from "../../../../tools/mockData";

describe("Testing Course Actions", () => {
  it("", () => {
    // Arrange
    const courseMockData = courses[0];
    const expectedAction = {
      type: "CREATE_COURSES_SUCCESS",
      course: courseMockData,
    };

    // Act
    const action = CourseActions.createCoursesSuccess(courseMockData);
    // Assert

    expect(action).toEqual(expectedAction);
  });
});
