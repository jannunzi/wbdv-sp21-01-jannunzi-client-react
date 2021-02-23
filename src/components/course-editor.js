import React from 'react'
import {Link} from "react-router-dom";
import moduleReducer from "../reducers/module-reducer";
import {createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";

const store = createStore(moduleReducer)

const CourseEditor = ({history}) =>
    <Provider store={store}>
      <h1>
          <Link to="/courses/table">
            <i className="fas fa-arrow-left"></i>
          </Link>
          Course Editor
          <i className="fas fa-times float-right"
             onClick={() => history.goBack()}></i>
      </h1>
        <ModuleList/>
    </Provider>
// const CourseEditor = () => {
//   return (
//     <h1>Course Editor</h1>
//   )
// }
export default CourseEditor
