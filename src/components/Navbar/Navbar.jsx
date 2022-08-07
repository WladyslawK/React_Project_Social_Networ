import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import {MyFriends} from "./MyFriends/MyFriends";

export const Navbar = (props) => {
    return (
    <>
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink className={navData => navData.isActive ? s.active : s.item} to='/profile'>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={navData => navData.isActive ? s.active : s.item} to='/dialogs'>Dialogs</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={navData => navData.isActive ? s.active : s.item} to='/news'>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={navData => navData.isActive ? s.active : s.item} to='/music'>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={navData => navData.isActive ? s.active : s.item} to='/settings'>Settings</NavLink>
      </div>
        <MyFriends friendsImages={props.state.friendsImages}/>
    </nav>
    </>
  );
}

