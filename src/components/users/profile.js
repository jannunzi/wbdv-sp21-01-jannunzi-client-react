import React, {useEffect, useState} from 'react'
import ContentPublic from "./content-public";
import AdminContent from "./admin-content";

const Profile = () => {
    const [user, setUser] = useState({})
    useEffect(() => {
        fetch("http://localhost:4000/api/profile")
            .then(response=>response.json())
            .then(currentUser => setUser(currentUser))
    })
    return(
        <div>
            <h1>Profile</h1>
            <ContentPublic/>
            {
                user.role === "ADMIN" &&
                    <AdminContent/>
            }
        </div>
    )
}

export default Profile