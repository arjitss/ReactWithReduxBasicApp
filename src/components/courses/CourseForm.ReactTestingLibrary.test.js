import React from "react";
import CourseForm from "./CourseForm";
import { render, cleanup } from "react-testing-library";

// react testing library is preferred over enzyme

afterEach(cleanup);

function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };
  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
}

it("Check the present of 'Add Course' Text value", () => {
  const { getByText } = renderCourseForm();
  getByText("Add Course");
});

it("Check the present of 'Add Course' Text value", () => {
  const { getByText } = renderCourseForm();
  getByText("Save");
});

it("Check the present of 'Add Course' Text value", () => {
  const { getByText, debug } = renderCourseForm({ saving: true });
  //debug();
  getByText("Saving...");
});
