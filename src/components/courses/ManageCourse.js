import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../redux/actions/courseActions";
import * as authorActions from "../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";

const ManageCourse = (props) => {
  const [courseData, setCourse] = useState({ ...props.newCourseData });
  const [errorData, setError] = useState({ ...props.newCourseData });

  function handleChange(event) {
    console.log("in handle chnage of manage course");
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    props.action.saveCourses(courseData).then(() => {
      props.history.push("/courses"); // passed by react router automatically
    });
  }

  useEffect(() => {
    if (props.course.length === 0) {
      props.action.loadCourses().catch((error) => {
        alert("Error course", error);
      });
    }

    props.action.loadAuthors().catch((error) => {
      alert("Error author", error);
    });
  }, []);

  return (
    <>
      <CourseForm
        course={courseData}
        authors={props.authors}
        errors={errorData}
        onChange={handleChange}
        onSave={handleSave}
      />
    </>
  );
};

ManageCourse.propTypes = {
  newCourseData: PropTypes.object.isRequired,
  action: PropTypes.object.isRequired,
  course: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = function (state) {
  console.log("in map state to props");
  return {
    newCourseData: newCourse,
    course: state.course,
    authors: state.authors,
  };
};

const mapDispatchToProps = function (dispatch) {
  console.log("in map dispatch to props");
  return {
    action: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.LoadAuthors, dispatch),
      saveCourses: bindActionCreators(courseActions.saveCourses, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse);
