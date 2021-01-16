import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CourseList = (props) => {
  return (
    <div>
      {props.courses.map((cour) => (
        <div key={cour.title + 10112}>
          <div key={cour.title}>{cour.title}</div>
          <div key={cour.title + cour.authorId}>{cour.authorName}</div>
          <Link to={"/course/" + cour.id}>{cour.title}</Link>
        </div>
      ))}
      hello
    </div>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default CourseList;
