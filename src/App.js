import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePosts from "./Components/CreatePosts/CreatePosts";
import "./App.css"

function App() {

  const [posts, setPosts] = useState([{
    userName: "PepdaBass", 
    content: "Liking this post will give you good luck with money today!",
    likes: 0,
    dislikes: 0
  }]);


  function addNewPost(post){
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }



  return (
    <div className="border-box">
      <NavBar />
      <CreatePosts addNewPostProperty = {addNewPost} />
      <DisplayPosts parentPosts = {posts} />
    </div>
  );
}

export default App;
