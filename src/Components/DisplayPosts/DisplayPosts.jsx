import React, { useState } from 'react';


const DisplayPosts = (props) => {

    const [likeStatus, setLikeStatus] = useState("");
    
    function updateLikeStatus(newStatus){
        setLikeStatus(newStatus);
    }

    return ( 
        <table>
            {props.parentPosts.map((post, i) => {
                return (
                    <tbody key={i}>
                    <tr>
                        <td>Name: {post.userName}<br /></td>
                    </tr>
                    <tr>
                        <td>Post: {post.content}<br /></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => updateLikeStatus("liked!")}>like</button>
                        <button onClick={() => updateLikeStatus("disliked!")}>dislike</button></td>
                    </tr>
                    <tr>Post {likeStatus}</tr>
                    </tbody>
                )  
            })}
        </table>
     );
}
 
export default DisplayPosts;