import React from "react";
import { useLoaderData } from "react-router-dom";
import CreatePost from "./Share Page/CreatePost";
import Post from "./Share Page/Post";

const Home = () => {

const post =useLoaderData([])
console.log(post)
  return (
    <div>
      <CreatePost></CreatePost>
      <Post data={post}></Post>
    </div>
  );
};

export default Home;
