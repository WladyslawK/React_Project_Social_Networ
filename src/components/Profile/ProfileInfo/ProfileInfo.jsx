import React from "react";
import s from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.img} src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg"
                     alt='picture'/>
            </div>
            <div className={s.description}>
                avatar + description
            </div>
        </div>
    );
}
export default ProfileInfo;

