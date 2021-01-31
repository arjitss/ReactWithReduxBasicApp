import { createStore } from "redux";
import reducers from "./reducers/index";
import * as courseAction from "./actions/courseActions";
import initialState from "./reducers/initialState";

it("Should handle creating courses", () => {
  // Arrange
  const store = createStore(reducers, initialState);
  const newCourse = {
    title: "Test Redux Store",
  };
  // Act

  const action = courseAction.createCoursesSuccess(newCourse);
  store.dispatch(action);

  // Assert
  const createdCourse = store.getState().course[0];
  expect(createdCourse).toEqual(newCourse);
});
