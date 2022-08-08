import React from "react";
import s from "./Profile.module.css"
import { MyPosts } from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {
    return (
        <>
            <div className={s.content}>
                <ProfileInfo/>
                <MyPosts postsData={props.state.postsData} addPost={props.addPost} newPostText={props.state.newPostText} updateNewPostText={props.updateNewPostText}/>
            </div>
        </>
    );
}