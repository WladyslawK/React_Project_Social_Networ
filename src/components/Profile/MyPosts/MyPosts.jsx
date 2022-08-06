import React from "react";
import s from "./MyPosts.module.css"
import { Post } from './Post/Post';

export const MyPosts = (props) => {

    let postElements = props.postsData.map(p => <Post text={p.text} likes={p.likes}/>)

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

