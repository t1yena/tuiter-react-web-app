import React from "react";
import "../profile/index.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../reducers/profile-reducer";
import { useNavigate } from "react-router";

const EditProfileComponent = () => 
{
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const profile = useSelector(state => state.profile)
    const [firstName, setFirstName] = useState(profile.firstName)
    const [lastName, setLastName] = useState(profile.lastName)
    const [bio, setBio] = useState(profile.bio)
    const [location, setLocation] = useState(profile.location)
    const [website, setWebsite] = useState(profile.website)

    const setProfile = () => {
        dispatch(updateProfile({
            firstName : firstName,
            lastName: lastName,
            bio: bio,
            location: location,
            website: website
        }))
        navigate("/tuiter/profile")
    }

    return(
      <>
      <div className="wd-border">
        <div className="row border-light">
            <button className="btn btn-lg col-1 p-0 m-0" onClick={navigate("/tuiter/profile")}>
                <i className="bi bi-x"></i>
            </button>
            <div className="col-11 position-relative">
                <div className="pb-1">
                    <span className="wd-bold wd-ft20">Edit Profile</span>
                    <button 
                        className="col btn btn-dark btn-sm rounded-pill float-end" 
                        onClick={()=>setProfile()}
                        >
                        Save
                    </button>
                </div> 
            </div>    
        </div>
        {/* banner pic */}
        <div className="position-relative mb-2">
            <img src="/images/starship.jpg" className="wd-banner" alt="banner"/>
            <div className="position-absolute wd-profile-nudge-up">
            <img src="/images/minion.jpg" className="rounded-circle " width = {120} alt="avatar"/>
            </div>
        </div>
        
        {/* edit profile */}
        <div className="wd-top-margin p-2">
            <div className="row">
                <div className = "wd-input-group mb-4">
                    <label className="wd-input-label wd-ft14 text-secondary">First Name</label>
                    <input 
                        type = "text"
                        id = "firstName"
                        onChange={(e)=>setFirstName(e.target.value)}
                        className = "wd-input-text" 
                        value = {firstName}>
                    </input>
                </div>
                <div className = "wd-input-group mb-4">
                    <label className="wd-input-label wd-ft14 text-secondary">Last Name</label>
                    <input 
                        type = "text"
                        id = "lastName"
                        onChange={(e)=>setLastName(e.target.value)}
                        className = "wd-input-text" 
                        value={lastName}>
                    </input>
                </div>
                <div className = "wd-input-group mb-4">
                    <label className="wd-input-label wd-ft14 text-secondary">Bio</label>
                    <textarea 
                        id = "bio"
                        onChange={(e)=>setBio(e.target.value)}
                        className = "wd-input-text" 
                        value={bio}>
                    </textarea>
                </div>
                <div className = "wd-input-group mb-4">
                    <label className="wd-input-label wd-ft14 text-secondary">Location</label>
                    <input 
                        type = "text"
                        id = "location"
                        onChange={(e)=>setLocation(e.target.value)}
                        className = "wd-input-text" 
                        value={location}>
                    </input>
                </div>
                <div className = "wd-input-group mb-4">
                    <label className="wd-input-label wd-ft14 text-secondary">Website</label>
                    <input 
                        type = "text"
                        id = "website"
                        onChange={(e)=>setWebsite(e.target.value)}
                        className = "wd-input-text" 
                        value={website}>
                    </input>
                </div>

            </div>
            
        </div>
    </div>
      </>
    );
   };
export default EditProfileComponent;