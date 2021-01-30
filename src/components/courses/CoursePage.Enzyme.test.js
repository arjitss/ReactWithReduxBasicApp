import React from "react";
import CourseForm from "./CourseForm";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

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
  return shallow(<CourseForm {...props} />);
}
it("Render Form", () => {
  const wrapper = renderCourseForm();
  expect(wrapper.find("form").length).toBe(1);
  //console.log(wrapper.debug())
  expect(wrapper.find("h2").text()).toBe("Add Course");
});

it("Have Button Label as Save", () => {
  const wrapper = renderCourseForm();
  expect(wrapper.find("button").text()).toEqual("Save");
});

it("Have Button Label as Save", () => {
  const wrapper = renderCourseForm({ saving: true });
  expect(wrapper.find("button").text()).toEqual("Saving...");
});
