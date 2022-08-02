import React from "react";
import s from "./MyPosts.module.css"
import { Post } from './Post/Post';

export const MyPosts = () => {
    return (
    <>
    <div className={s.content}>
        <h3>My Posts</h3>
        <div>
          <h4>New Post</h4>
          <textarea></textarea><br/>
          <button>Add Post</button>
        </div>
        <div className={s.posts}>
          <Post text="Post 1"/>
          <Post text="Post 2"/>
          <Post text="Post 3"/>
          <Post text="Post 4"/>
          <Post text="Post 5"/>
          <Post text="Post 6"/>
        </div>  
      </div>
    </>
  );
}

