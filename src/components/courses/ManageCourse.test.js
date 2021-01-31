import React from "react";
import { ManageCourse } from "./ManageCourse";
import { authors, newCourse, courses } from "../../../tools/mockData";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";

configure({ adapter: new Adapter() });

function renderManageCoursePage(args) {
  const defaultProps = {
    authors,
    course: courses,
    history: {},

    action: {
      loadAuthors: jest.fn(),
      saveCourses: jest.fn(() =>
        Promise.resolve({ data: "Title is required" })
      ),
      loadCourses: jest.fn(() => Promise.resolve({ data: {} })),
    },

    newCourseData: newCourse,
  };
  const props = { ...defaultProps, ...args };
  return mount(<ManageCourse {...props} />);
}

it("sets an error if save course without title", () => {
  //   //Arrange
  //   const wrapper = renderManageCoursePage();
  //   console.log("88888888888888888888888888888888888888888");
  //   // Act
  //   const a = wrapper.find("form").simulate("submit");
  //   console.log(a);
  //   const error = wrapper.find(".alert").first();
  //   expect(error).toEqual("Title is required");
});
