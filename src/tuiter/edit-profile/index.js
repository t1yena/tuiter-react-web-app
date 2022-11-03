import React from "react";
import {useSelector} from "react-redux";
import EditProfile from "./EditProfileComponent.js";

const EditProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    return(
        <EditProfile profile={profile}/>
    );
};
export default EditProfileComponent;