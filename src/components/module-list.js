import React, {useEffect} from 'react'
import {connect, Provider} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
// import {findModulesForCourse, createModule} from "../services/module-service";
import moduleService from "../services/module-service"
import moduleActions from "../actions/module-actions";

const ModuleList = (
    {
        modules=[],
        createModule,
        updateModule,
        deleteModule,
        findModulesForCourse
    }) => {
    const {layout, courseId, moduleId} = useParams();
    useEffect(() => {
        // console.log(courseId)
        findModulesForCourse(courseId)
    }, [])
    return(<div>
        <h2>Module List</h2>
        <ul>
            <li>layout: {layout}</li>
            <li>courseId: {courseId}</li>
            <li>moduleId: {moduleId}</li>
        </ul>


        <ul className="list-group">
            {
                modules.map(module =>
                    <li className="list-group-item">
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                            deleteItem={deleteModule}
                            updateItem={updateModule}
                            item={module}/>
                    </li>
                )
            }
            <li className="list-group-item">
                <i onClick={() => createModule(courseId)} className="fas fa-plus fa-2x"></i>
            </li>
        </ul>
    </div>)}

const stpm = (state) => ({
    modules: state.moduleReducer.modules
})
const dtpm = (dispatch) => ({
    createModule: (courseId) => moduleActions.createModule(dispatch, courseId),
    updateModule: (newItem) => moduleActions.updateModule(dispatch, newItem),
    deleteModule: (moduleToDelete) => moduleActions.deleteModule(dispatch, moduleToDelete),
    findModulesForCourse: (courseId) => moduleActions.findModulesForCourse(dispatch, courseId)
})

export default connect(stpm, dtpm)(ModuleList)

