import './App.css';
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <Route path={["/", "/courses"]} exact={true} component={CourseManager}/>
          {/*<Route path="/editor" component={CourseEditor}/>*/}
          <Route path="/editor" exact={true} render={(props) => <CourseEditor {...props}/>}/>
        {/*<div className="container-fluid">*/}
        {/*  <CourseManager/>*/}
        {/*  <CourseEditor/>*/}
        {/*</div>*/}
      </BrowserRouter>
  );
}

export default App;
