import React from "react";
import s from "./MyPosts.module.css"
import { Post } from './Post/Post';

export const MyPosts = (props) => {

    let postElements = props.state.postsData.map(p => <Post text={p.text} likes={p.likes}/>)

    let newPostReference = React.createRef();



    let addPost =() => {
        props.dispatch({type: "ADD-POST"});
    }

    let ChangePostArea = () => {
        let text = newPostReference.current.value;
        let action = {type: "UPDATE-NEW-POST-TEXT", newText: text};
        props.dispatch(action);
    }

    return (
        <>
            <div className={s.content}>
                <h3>My Posts</h3>
                <div>
                    <h4>New Post</h4>
                    <textarea onChange={ChangePostArea} ref={newPostReference} value={props.state.newPostText}/><br/>
                    <button onClick={addPost}>Add Post</button>
                </div>
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
        </>
    );
}