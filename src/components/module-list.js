import React from 'react'
import {connect} from "react-redux";

const ModuleList = ({modules=[]}) =>
    <div>
        <h2>Module List</h2>
        <ul className="list-group">
            {
                modules.map(module =>
                    <li className="list-group-item">
                        {module.title}
                    </li>
                )
            }
        </ul>
    </div>

const stpm = (state) => ({
    modules: state.modules
})
const dtpm = (dispatch) => {}

export default connect(stpm, dtpm)(ModuleList)

