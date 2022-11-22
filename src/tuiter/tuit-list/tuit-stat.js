import React from "react"
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = (
    {
        tuit = {
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
    // const tuit = useSelector(state => state.tuitsData)

    return(
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
            <i className="bi bi-heart-fill me-2 text-danger"
               onClick={() => dispatch(updateTuitThunk({
                ...tuit,
                likes: tuit.likes + 1}))}></i>
            {tuit.likes}
        </div>
        <div className="col">
            <i className="bi bi-hand-thumbs-down me-2"
               onClick={() => dispatch(updateTuitThunk({
                ...tuit,
                dislikes: (post.dislikes === undefined ? 1 : post.dislikes + 1)}))}></i>
            {tuit.dislikes}
        </div>
        <div className="col">
            <i className="bi bi-upload p-3 text-secondary"></i>
        </div>
            
    </div>
    
    );
}
export default TuitStats;