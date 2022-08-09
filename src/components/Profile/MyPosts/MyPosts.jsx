import React from "react";
import s from "./MyPosts.module.css"
import { Post } from './Post/Post';
import {addPostActionCreator, updateNewPostText} from "../../../Redux/Profile-reducer";

export const MyPosts = (props) => {

    let postElements = props.state.postsData.map(p => <Post text={p.text} likes={p.likes}/>)

    let newPostReference = React.createRef();


    let addPost =() => {
        props.dispatch(addPostActionCreator());
    }

    let ChangePostArea = () => {
        let text = newPostReference.current.value;
        props.dispatch(updateNewPostText(text));
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