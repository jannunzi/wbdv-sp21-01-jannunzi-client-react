import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";

export default class CourseManager
  extends React.Component {
  state = {
    courses: [
      {title: "CS5610", owner:"me", lastModified: "1/1/2021"},
      {title: "CS4550", owner:"you", lastModified: "2/1/2021"},
      {title: "CS3200", owner:"him", lastModified: "1/21/2021"},
      {title: "CS5200", owner:"her", lastModified: "1/13/2021"},
      {title: "CS1234", owner:"us", lastModified: "1/16/2021"}
    ]
  }
  render() {
    return(
      <div>
        <h1>Course Manager</h1>
        <CourseTable courses={this.state.courses}/>
        <CourseGrid courses={this.state.courses}/>
      </div>
    )
  }
}
// export default CourseManager
