import React from "react";
import "../profile/index.css"
import { useState } from "react";
import profile from "../data/profile.json"
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../reducers/profile-reducer";
import { useNavigate } from "react-router";

const EditProfileComponent = () => 
{
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const profile = useSelector(state => state.profile)
    const [firstName, setFirstName] = useState(profile.firstName)

    const setProfile = () => {
        dispatch(updateProfile({
            firstName : firstName
        }))
        navigate("/tuiter/profile")
    }


    // const dispatch = useDispatch();
    // const editProfileHandler = (profile) => {
    //     dispatch(updateProfile(profile))
    // }

    // const [pro, setProfile] = useState(
    //     {firstName: profile.firstName,
    //     lastName: profile.lastName,
    //     bio: profile.bio,
    //     location: profile.location}
    // )

    // const changeFName = (e) => {
    //     const newFName = e.target.value;
    //     const newProfile = {
    //         ...pro,
    //         firstName: newFName
    //     };
    //     setProfile(newProfile)
    // }

    // const changeLName = (e) => {
    //     const newLName = e.target.value;
    //     const newProfile = {
    //         ...pro,
    //         lastName: newLName
    //     };
    //     setProfile(newProfile)
    // }

    return(
      <>
      <div className="wd-border">
        <div className="row border-light">
            <a className="col-1 wd-no-link" href="/tuiter/profile">
                <i className="wd-bottom-4 float-end bi bi-x fs-2 position-relative"></i>
            </a>
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
                        // onChange={changeLName}
                        className = "wd-input-text" 
                        value={profile.lastName}>
                    </input>
                </div>
                <div className = "wd-input-group mb-4">
                    <label className="wd-input-label wd-ft14 text-secondary">Bio</label>
                    <textarea className = "wd-input-text" value={profile.bio}></textarea>
                </div>
                <div className = "wd-input-group mb-4">
                    <label className="wd-input-label wd-ft14 text-secondary">Location</label>
                    <textarea className = "wd-input-text" value={profile.location}></textarea>
                </div>
                <div className = "wd-input-group mb-4">
                    <label className="wd-input-label wd-ft14 text-secondary">Website</label>
                    <textarea className = "wd-input-text" value={profile.website}></textarea>
                </div>

            </div>
            
        </div>
    </div>
      </>
    );
   };
export default EditProfileComponent;