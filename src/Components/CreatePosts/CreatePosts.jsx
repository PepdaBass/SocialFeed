import React, { useState } from 'react';

const CreatePosts = (props) => {

    const [userName, setUserName] = useState("");
    const [content, setContent] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            userName : userName,
            content : content
        }
        props.addNewPostProperty(newPost);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} />
            </div>
            <div>
                <label>Post</label>
                <input type="text" value={content} onChange={(event) => setContent(event.target.value)} />
            </div>
            <button type="submit">POST</button>
        </form>
     );
}
 
export default CreatePosts;