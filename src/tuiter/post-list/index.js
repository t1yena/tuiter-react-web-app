import React from "react";
import postArray from './post.json';
import PostItem from "./post-item";

const PostList = () => {
    return(
      <ul className="list-group">
        {
          postArray.map(post =>
            <PostItem
              key={post._id} post={post}/> )
        }
      </ul>
    );
   };
   export default PostList;