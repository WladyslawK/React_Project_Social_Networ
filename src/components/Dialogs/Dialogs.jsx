import React from "react"
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>);
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    );
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <Dialog name="Dave" id="1"/>
                <Dialog name="Michal" id="2"/>
                <Dialog name="Damian" id="3"/>
                <Dialog name="Karol" id="4"/>
                <Dialog name="Anna" id="5"/>
                <Dialog name="Maria" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi Helow"/>
                <Message message="How is your progress?"/>
                <Message message="Yo"/>
            </div>

        </div>
    );
}

export default Dialogs;