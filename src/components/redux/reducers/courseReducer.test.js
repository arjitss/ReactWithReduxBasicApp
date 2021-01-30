import courseReducer from "./courseReducer";
import * as courseActions from "../actions/courseActions";

it("Test Reducers - Create Course", () => {
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

it("Test Reducers - Create Course", () => {
  // Arrange
  const initialState = [
    {
      id: 1,
      title: "A",
    },
    {
      id: 2,
      title: "B",
    },
    {
      id: 3,
      title: "C",
    },
  ];

  const courseUpdated = { id: 2, title: "Updated Title B" };

  const action = courseActions.updateCoursesSuccess(courseUpdated);
  // Act

  const resultNewState = courseReducer(initialState, action);

  // Assert

  expect(resultNewState.length).toEqual(3);
  expect(resultNewState[0].title).toEqual("A");
  expect(resultNewState[1].title).toEqual("Updated Title B");
});
