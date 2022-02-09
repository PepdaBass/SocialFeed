import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePosts from "./Components/CreatePosts/CreatePosts";

function App() {

  const [posts, setPosts] = useState([{userName: "J-money", content: "I'm da man! Suck it!"}]);

  function addNewPost(post){
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }



  return (
    <div>
      <NavBar />
      <CreatePosts addNewPostProperty = {addNewPost} />
      <DisplayPosts parentPosts = {posts} />
    </div>
  );
}

export default App;
