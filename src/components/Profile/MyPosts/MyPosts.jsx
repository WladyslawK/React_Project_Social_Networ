import React from "react";
import s from "./MyPosts.module.css"
import { Post } from './Post/Post';

export const MyPosts = (props) => {

    let postElements = props.postsData.map(p => <Post text={p.text} likes={p.likes}/>)

    let newPostReference = React.createRef();

    let addPost =() => {
        debugger;
        let text = newPostReference.current.value;
        props.addPost(text);
        newPostReference.current.value = "";
    }

    return (
    <>
    <div className={s.content}>
        <h3>My Posts</h3>
        <div>
          <h4>New Post</h4>
          <textarea ref={newPostReference}></textarea><br/>
          <button onClick={addPost}>Add Post</button>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>  
      </div>
    </>
  );
}

