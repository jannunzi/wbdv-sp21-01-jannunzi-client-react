import React from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import moduleReducer from "../reducers/module-reducer";
import lessonReducer from "../reducers/lesson-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer
})

const store = createStore(reducer)

const CourseEditor = ({history, params}) => {
    const {layout, courseId, moduleId} = useParams();
    return(
        <Provider store={store}>
      <h1>
          <Link to="/courses/table">
            <i className="fas fa-arrow-left"></i>
          </Link>
          Course Editor
          <i className="fas fa-times float-right"
             onClick={() => history.goBack()}></i>
      </h1>
        <div className="row">
            <div className="col-3">
                <ModuleList/>
            </div>
            <div className="col-9">
                <LessonTabs/>
            </div>
        </div>
    </Provider>)
    }
// const CourseEditor = () => {
//   return (
//     <h1>Course Editor</h1>
//   )
// }
export default CourseEditor
