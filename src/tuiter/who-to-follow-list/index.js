import React from "react";
import { useSelector } from "react-redux"; // moved data into reducer & import hook to retrieve state
import WhoToFollowListItem 
  from "./who-to-follow-list-item";

const WhoToFollowList = () => {
  const whoArray = useSelector((state) => state.who); // retrieve state from store
  return(
    <ul className="list-group">
      <li className="list-group-item">
        <h3>Who to follow</h3>
      </li>
      {
        whoArray.map(who =>
          <WhoToFollowListItem
            key={who._id}
            who={who}/>
        )
      }
    </ul>
  );
};

export default WhoToFollowList;