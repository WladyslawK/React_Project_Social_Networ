import React from "react";
import s from "./MyPosts.module.css"
import { Post } from './Post/Post';

export const MyPosts = () => {
    let postsData = [
        {id: 1, text: "Post 1", likes: 10 },
        {id: 2, text: "Post 2", likes: 15 },
        {id: 3, text: "Post 3", likes: 35 },
    ];

    let postElements = postsData.map(p => <Post text={p.text} likes={p.likes}/>)

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
            {postElements}
        </div>  
      </div>
    </>
  );
}

