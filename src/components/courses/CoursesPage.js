import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as courseActions from "../redux/actions/courseActions";
import * as authorActions from "../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import Spinner from "../common/Spinner";

const CoursesPage = (props) => {
  const [title, setTitle] = useState({ course: { title: "" } });
  // Way 1 to display spinner using internal state
  const [apiLoading, setApiLoading] = useState(0);

  useEffect(() => {
    if (props.course.length === 0) {
      props.action.loadCourses().catch((error) => {
        alert("Error course", error);
      });
    }

    props.action
      .loadAuthors()
      .then(() => {
        setApiLoading(1);
      })
      .catch((error) => {
        alert("Error author", error);
      });
  }, []);

  const handleChange = (e) => {
    setTitle({ course: { title: e.target.value, authorId: 2 } });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title.course);
    console.log("in handle submit");
    debugger;
    props.action.createCourse(title.course);
    //alert(title.course.title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Course</h2>
      {apiLoading === 0 ? (
        <Spinner />
      ) : (
        <>
          <h3>Add Courses</h3>
          <input
            type="text"
            onChange={handleChange}
            value={title.course.title}
          ></input>
          <input type="submit" value="Save"></input>
          {/* {props.course.map((cour) => (
        <div key={cour.title}>{cour.title}</div>
      ))} */}
          <CourseList courses={props.course} authors={props.authors} />
        </>
      )}
    </form>
  );
};

CoursesPage.propTypes = {
  action: PropTypes.object.isRequired,
  course: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
};

const mapStateToProps = function (state) {
  console.log("in map state to props");
  return {
    course:
      state.authors.length === 0
        ? []
        : state.course.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
  };
};

const mapDispatchToProps = function (dispatch) {
  console.log("in map dispatch to props");
  return {
    action: {
      createCourse: bindActionCreators(courseActions.createCourse, dispatch),
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.LoadAuthors, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
