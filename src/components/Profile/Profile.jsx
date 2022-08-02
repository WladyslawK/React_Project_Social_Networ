import React from "react";
import s from "./Profile.module.css"
import { MyPosts } from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
    <>
    <div className={s.content}>
        <img className={s.img} src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg"/>
        <MyPosts/>
      </div>
    </>
  );
}

