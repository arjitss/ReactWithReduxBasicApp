import courseReducer from "./courseReducer";
import * as courseActions from "../actions/courseActions";

it("Test Reducers", () => {
  // Arrange
  const initialState = [
    {
      title: "A",
    },
    {
      title: "B",
    },
  ];

  const newCourse = {
    title: "C",
  };

  const action = courseActions.createCoursesSuccess(newCourse);
  console.log("--------------");
  console.log(action);
  console.log("--------------");
  // Act

  const resultNewState = courseReducer(initialState, action);

  // Assert

  expect(resultNewState.length).toEqual(3);
  expect(resultNewState[0].title).toEqual("A");
  expect(resultNewState[2].title).toEqual("C");
});
