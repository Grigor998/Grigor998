import React from "react";
import profileInfo from "./ProfileInfo.module.css"

const Profile = () => {
    return (
        <div>
            <div className={profileInfo.background}>
                <img  src='https://i.pinimg.com/originals/61/82/0c/61820c847df4e02b95b6175eaca60b23.jpg'/>
            </div>
            <div className={profileInfo.avatar}>
                <img src='https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg'/>
            </div>
        </div>
    )
}
export default Profile;