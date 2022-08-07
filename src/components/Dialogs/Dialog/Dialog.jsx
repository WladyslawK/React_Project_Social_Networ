import React from "react"
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    return (
        <div className={s.dialog}>
           <img className={s.dialogImage} src={props.image} alt="logo"/>
            <NavLink className={s.dialogLinks} to={"/dialogs/" + props.id}>{props.name}</NavLink>

        </div>);
}

export default Dialog;