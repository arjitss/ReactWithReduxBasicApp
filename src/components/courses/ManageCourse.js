import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../redux/actions/courseActions";
import * as authorActions from "../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

export const ManageCourse = (props) => {
  const [courseData, setCourse] = useState({ ...props.newCourseData });
  const [errorData, setError] = useState({ ...props.newCourseData });
  const [saving, setSaving] = useState(false);

  function handleChange(event) {
    console.log("in handle chnage of manage course");
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(event) {
    setSaving(true);
    event.preventDefault();
    props.action.saveCourses(courseData).then(() => {
      toast.success("Course Saved...!!!");
      props.history.push("/courses"); // passed by react router automatically
    });
  }

  useEffect(() => {
    if (props.course.length === 0) {
      props.action.loadCourses().catch((error) => {
        alert("Error course", error);
      });
    }
    if (props.authors.length === 0) {
      props.action.loadAuthors().catch((error) => {
        alert("Error author", error);
      });
    }
  }, []);

  return (
    <>
      <CourseForm
        course={courseData}
        authors={props.authors}
        errors={errorData}
        onChange={handleChange}
        onSave={handleSave}
        saving={saving}
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

const getCourseById = (course, id) => {
  console.log(course);
  return course.find((c) => c.id == parseInt(id));
};

const mapStateToProps = function (state, ownProps) {
  console.log("in map state to props");
  const id = ownProps.match.params.id;
  debugger;
  const course =
    id && state.course.length > 0 ? getCourseById(state.course, id) : newCourse;
  console.log(course);
  return {
    newCourseData: course,
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
