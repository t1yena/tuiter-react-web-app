import React from "react";
const PostSummaryItem = (
 {
   post = {
     "topic": "Space",
     "username": "SpaceX",
     "time": "2h",
     "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
     "image": "tesla.png"
   }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-10">
       <div>
          <span className="col text-secondary"> {post.username}</span>
          <i className="bi bi-dot text-secondary"></i>
          <span className="col text-secondary">{post.time}</span>
        </div>
       <div className="fw-bolder">{post.topic}</div>
       <div>{post.title}</div>
     </div>
     <div className="col-2">
       <img width={70} className="float-end rounded-3" src={`/images/${post.image}`} alt="post summary"/>
     </div>
   </div>
  </li>
 );
};
export default PostSummaryItem;