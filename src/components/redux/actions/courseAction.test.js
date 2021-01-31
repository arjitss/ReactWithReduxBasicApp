import * as CourseActions from "./courseActions";
import * as types from "./actionTypes";
import { courses } from "../../../../tools/mockData";
import fetchMock from "fetch-mock"; //mock api calls
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Testing Thunks - Async Actions", () => {
  // test async action
  afterEach(() => {
    fetchMock.restore();
  });

  it("", () => {
    // Arrange
    const expectedActions = [
      { type: types.BEGIN_API_CALL },
      { type: types.LOAD_COURSES_SUCCESS, course: courses },
    ];

    fetchMock.mock("*", {
      body: courses,
      headers: { "content-type": "application/json" },
    });

    // Act
    const store = mockStore({ courses: [] });
    return store
      .dispatch(CourseActions.loadCourses()) //this is action to be tested
      .then(() => {
        // Assert
        expect(store.getActions()).toEqual(expectedActions); // this is to be asserted
      });
  });
});

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
