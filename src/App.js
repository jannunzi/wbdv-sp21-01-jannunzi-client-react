import './App.css';
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor";

function App() {
  return (
    <div className="container-fluid">
      <CourseManager/>
      <CourseEditor/>
    </div>
  );
}

export default App;
