import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/Profile-reducer";
import {MyPosts} from "./MyPosts";

export const MyPostsContainer = (props) => {

    let state = props.store().profilePage;

    let onAddPost =() => {
        props.dispatch(addPostActionCreator());
    }

    let onChangePostArea = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action);
    }

    return (<MyPosts updateNewPostText = {onChangePostArea} addPost = {onAddPost}  postElements = {state.postsData} newPostText = {state.newPostText}/>);
}


export default MyPostsContainer