import React, { useState } from 'react';
import "./Post.css"

const Post = ({userName, content}) => {

    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    function handleLike(){
        setLiked(!liked);
        setDisliked(false);
      }
    
      function handleDislike(){
          setDisliked(!disliked);
          setLiked(false);
      }

    return ( 
        <div className="post">
            <h3>{userName}</h3>
            <p>{content}</p>
            <div className="buttons">
                <button className={`btn btn-${liked ? "success" : "light"}`} onClick={handleLike}>Like</button>
                <button className={`btn btn-${disliked ? "success" : "light"}`}onClick={handleDislike}>Dislike</button>
            </div>
        </div>
     );
}
 
export default Post;