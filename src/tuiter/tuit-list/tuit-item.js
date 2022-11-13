import React from "react"
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../../services/tuits-thunks";
import TuitStats from "./tuit-stat";

const TuitItem = (
    {
    post: tuit = {
        "_id": 123, 
        "topic": "Space", 
        "username": "SpaceX",
        "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        "time": "2h",   
        "image": "tesla.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "dislikes": 0,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
    
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {dispatch(deleteTuitThunk(id));}

    return(
    <li className="list-group-item">
    <div className="row">
        <div className="col-1 p-1">
            <img className="wd-image-round" src={`/images/${tuit.image}`} alt="avatar"/>
        </div>
        <div className="col-11">
            <div>
                <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>
                <span className="fw-bolder">{tuit.username} </span>
                <i className="bi bi-patch-check-fill wd-blue-icon"></i>
                <span className="col text-secondary"> {tuit.handle}</span>
                <i className="bi bi-dot text-secondary"></i>
                <span className="col text-secondary">{tuit.time}</span>    
            </div>
            {tuit.tuit}
            <TuitStats tuit={tuit}/>
        </div>
        
    </div>
    </li>   
    
    );
}
export default TuitItem;