import React from 'react'

const CourseRow = (
  {
    course,
    lastModified="1/1/2021",
    title="Unknown course",
    owner="who knows?"
  }) =>
  <tr>
    <td>{course.title}</td>
    <td>{course.owner}</td>
    <td>{course.lastModified}</td>
    <td>
      <i className="fas fa-trash"></i>
      <i className="fas fa-edit"></i>
      <i className="fas fa-check"></i>
    </td>
  </tr>

export default CourseRow
