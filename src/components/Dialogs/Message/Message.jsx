import React from "react"
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Message = (props) => {
    return (
        <div className={props.sender==="me" ? s.myMessage : s.othersMessage}>
            {props.message}
        </div>
    );
}

export default Message;