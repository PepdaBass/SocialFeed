import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";

function App() {

  const [posts, setPosts] = useState([{userName: "J-money", content: "I'm da man! Suck it!"}]);





  return (
    <div>
      <NavBar />
      <DisplayPosts parentPosts = {posts} />
    </div>
  );
}

export default App;
