import React from "react";
import s from "./MyFriends.module.css"

export  const MyFriends = (props) => {

    let MyFriendsImageElements = props.friendsImages.map(imSrc => <img src={imSrc.url} className={s.friends} alt="avatar"/> )

    return (
        <div className={s.friendsBox}>
            <h4>Friends</h4>
            {MyFriendsImageElements}
        </div>);
}