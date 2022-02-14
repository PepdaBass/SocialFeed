import React, { useState } from 'react';
import Post from '../Post/Post';


const DisplayPosts = ({parentPosts}) => {

    const [likeStatus, setLikeStatus] = useState("");
    
    function updateLikeStatus(newStatus){
        setLikeStatus(newStatus);
    }

    return ( 
       <div>
           {parentPosts.map((post, i) => {
               return (
                   <Post key={i} userName = {post.userName} content = {post.content} />
               )
           })}
       </div>
     );
}
 
export default DisplayPosts;