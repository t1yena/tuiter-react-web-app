import React from "react"
import { useDispatch } from "react-redux";
import { deleteTuit } from "../tuits/tuits-reducer";


const TuitItem = (
    {
    post: tuit = {
        "_id": 123, 
        "topic": "Space", 
        "userName": "SpaceX",
        "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        "time": "2h",   
        "image": "tesla.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
    
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {dispatch(deleteTuit(id));}

    return(
    <li className="list-group-item">
    <div className="row">
        <div className="col-1 p-1">
            <img className="wd-image-round" src={`/images/${tuit.image}`} alt="avatar"/>
        </div>
        <div className="col-11">
            <div>
                <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>
                <span className="fw-bolder">{tuit.userName} </span>
                <i className="bi bi-patch-check-fill wd-blue-icon"></i>
                <span className="col text-secondary"> {tuit.handle}</span>
                <i className="bi bi-dot text-secondary"></i>
                <span className="col text-secondary">{tuit.time}</span>    
            </div>
            {tuit.tuit}
            
            <div className="row pt-2">
                <div className="col">
                    <i className="bi bi-chat p-3 text-secondary"></i>
                    <span className = "text-secondary">{tuit.replies}</span>
                </div>
                <div className="col">
                    <i className="bi bi-repeat p-3 text-secondary"></i>
                    <span className = "text-secondary">{tuit.retuits}</span>
                </div>
                <div className="col">
                    <i className="bi bi-heart p-3 text-secondary"></i>
                    <span className = "text-secondary">{tuit.likes}</span>
                </div>
                <div className="col">
                    <i className="bi bi-upload p-3 text-secondary"></i>
                </div>
                    
            </div>
        </div>
        
    </div>
    </li>   
    
    );
}
export default TuitItem;