import './App.css';
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor";
import {BrowserRouter, Link, Route} from "react-router-dom";
import Home from "./components/home"
import Login from "./components/users/login";
import Register from "./components/users/register";
import Profile from "./components/users/profile";

function App() {
  return (
      <BrowserRouter>
          <div className="container-fluid">
              <Link to="/register">
                  Register
              </Link>
              <Link to="/login">
                  Login
              </Link>
              <Route path="/" exact={true}  component={Home}/>
              <Route path="/login" exact={true}  component={Login}/>
              <Route path="/register" exact={true}  component={Register}/>
              <Route path="/profile" exact={true}  component={Profile}/>
          <Route path="/courses" component={CourseManager}/>
          {/*<Route path="/editor" component={CourseEditor}/>*/}
          <Route path={[
              "/courses/:layout/edit/:courseId",
              "/courses/:layout/edit/:courseId/modules/:moduleId",
              "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
              "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"
          ]}
                 exact={true}
                 render={(props) => <CourseEditor {...props}/>}/>
        {/*<div className="container-fluid">*/}
        {/*  <CourseManager/>*/}
        {/*  <CourseEditor/>*/}
        {/*</div>*/}
          </div>
      </BrowserRouter>
  );
}

export default App;
