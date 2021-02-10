import React from 'react'
import CourseRow from "./course-row";

export default class CourseTable extends
  React.Component {
  state = {
    courses: [
      {title: "CS5610", owner:"me", lastModified: "1/1/2021"},
      {title: "CS4550", owner:"you", lastModified: "2/1/2021"},
      {title: "CS3200", owner:"him", lastModified: "1/21/2021"},
      {title: "CS5200", owner:"her", lastModified: "1/13/2021"},
      {title: "CS1234", owner:"us", lastModified: "1/16/2021"}
    ]
  }
  // courses = [
  //   {title: "CS5610", owner:"me", lastModified: "1/1/2021"},
  //   {title: "CS4550", owner:"you", lastModified: "2/1/2021"},
  //   {title: "CS3200", owner:"him", lastModified: "1/21/2021"},
  //   {title: "CS5200", owner:"her", lastModified: "1/13/2021"},
  //   {title: "CS1234", owner:"us", lastModified: "1/16/2021"}
  // ]
  addCourse = () => {
    // alert('add course')
    const newCourse = {
      title: "New Course",
      owner: "me",
      lastModified: "2/10/2021"
    }
    this.state.courses.push(newCourse)
    this.setState(this.state)
  }
  render() {
    return(
      <div>
        <h2>Course Table</h2>
        <button onClick={this.addCourse}>
          Add Course
        </button>
        <table className="table">
          {/*<CourseRow title="CS5610" owner="me"/>*/}
          {/*<CourseRow title="CS3200" owner="you"/>*/}
          {/*<CourseRow title="CS5200" owner="him"/>*/}
          {/*<CourseRow title="CS4550" owner="she"/>*/}
          {
            this.state.courses.map(course =>
              <CourseRow
                course={course}
                title={course.title}
                lastModified={course.lastModified}
                owner={course.owner}/>)
          }
        </table>
      </div>
    )
  }
}
