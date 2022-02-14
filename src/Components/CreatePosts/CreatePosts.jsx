import React, { useState } from 'react';
import "./CreatePosts.css"

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
            <div className="container-fluid bg-secondary">
                <div className="create_name">
                    <label><strong>Username</strong></label>
                    <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} />
                </div>
                <div className="create_content">
                    <label><strong>Content</strong></label>
                    <textarea type="text" value={content} onChange={(event) => setContent(event.target.value)} />
                </div>
                <div className="create_button">
                    <button type="submit" className="btn btn-success">POST</button>
                </div>
            </div>
        </form>
     );
}
 
export default CreatePosts;