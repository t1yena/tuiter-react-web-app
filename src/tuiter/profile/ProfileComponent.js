import React from "react";
import "./index.css"

const ProfileComponent = (
    {
        profile = {
            firstName: 'Jose', 
            lastName: 'Annunziato', 
            handle: '@jannunzi',
            profilePicture: 'jose.png', 	
            bannerPicture: 'polyglot.png',
            bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
            website: 'youtube.com/webdevtv',
            location: 'Boston, MA',	
            dateOfBirth: 'November 21, 1968',	
            dateJoined: 'April 2009',
            followingCount: 340,	
            followersCount: 223,
            tuitCount: 6114
        }
    }
) => {
    return(
      <>
      <div className="wd-border">
        <div className="row border-light">
            <div className="col-1">
                <i className="wd-bottom-4 float-end bi 
                            bi-arrow-left-short fs-2 position-relative"></i>
            </div>
            <div className="col-11 position-relative">
                <div className="row pb-1">
                    <div className="wd-bold wd-ft20">{profile.firstName} {profile.lastName}</div>
                    <span className="wd-ft14 text-secondary">
                        {profile.tuitCount} Tuits
                    </span>
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
        <a className="col wd-button btn-sm rounded-pill float-end" href="/tuiter/edit-profile" role="button">Edit profile</a>
        
        <div className="wd-top-margin">
            <span className="wd-ft20 wd-bold">{profile.firstName} {profile.lastName}</span>
            <div className="text-secondary"> {profile.handle}</div>
            <p className="mt-3">{profile.bio}</p>
            <div className="row">
                <div className="col-4">
                    <i className="bi bi-geo-alt p-1 text-secondary "></i>
                    <span className = "text-secondary">{profile.location}</span>
                </div>
                <div className="col-4">
                    <i className="bi bi-balloon p-1 text-secondary"></i>
                    <span className = "text-secondary">Born {profile.dateOfBirth}</span>
                </div>
                <div className="col-4">
                    <i className="bi bi-calendar3 p-1 text-secondary"></i>
                    <span className = "text-secondary">Joined {profile.dateJoined}</span>
                </div>       
            </div>
            <div className="row mt-3 wd-ft14 wd-align-left">
                <div className="col-3">
                    <span className="wd-bold">{profile.followingCount}</span>
                    <span className="text-secondary"> Following </span>
                </div>
                <div className="col-3">
                    <span className="wd-bold"> {profile.followersCount}</span>
                    <span className="text-secondary"> Followers</span>
                </div>
            </div>
        </div>
    </div>
      </>
    );
   };
export default ProfileComponent;