import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/Profile-reducer";
import {MyPosts} from "./MyPosts";

export const MyPostsContainer = (props) => {

    let onAddPost =() => {
        props.dispatch(addPostActionCreator());
    }

    let onChangePostArea = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action);
    }

    return (<MyPosts updateNewPostText = {onChangePostArea} addPost = {onAddPost}  postElements = {props.state.postsData} newPostText = {props.state.newPostText}/>);
}


export default MyPostsContainer