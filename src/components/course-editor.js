import React from 'react'
import {Link} from "react-router-dom";

const CourseEditor = ({history}) =>
  <h1>
      <Link to="/courses">
        <i className="fas fa-arrow-left"></i>
      </Link>
      <span onClick={() => history.goBack()}>Go Back</span>
      Course Editor
  </h1>

// const CourseEditor = () => {
//   return (
//     <h1>Course Editor</h1>
//   )
// }
export default CourseEditor
