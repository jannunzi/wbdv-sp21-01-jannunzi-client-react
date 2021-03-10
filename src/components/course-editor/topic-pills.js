import React from 'react'
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom"

const TopicPills = () => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    return (<div>
        {courseId}{moduleId}{lessonId}
        <ul className="nav nav-pills">
            <li className="nav-item">
                <Link to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/ABC123`}>
                    ABC123
                </Link>
            </li>
            <li className="nav-item">
                <Link to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/ABC234`}>
                    ABC234
                </Link>
            </li>
        </ul>
    </div>)
    }

export default TopicPills