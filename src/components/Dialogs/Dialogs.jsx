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

    let dialogsData=[
        {id: 1, name: "Dave"},
        {id: 2, name: "Michal"},
        {id: 3, name: "Damian"},
        {id: 4, name: "Karol"},
        {id: 5, name: "Maria"},
        {id: 6, name: "Anna"},
    ]

    let messages=[
        {id: 1, message: "Hi Helow"},
        {id: 2, message: "How is your progress?"},
        {id: 3, message: "Yo"},
    ]

    let dialogsElements = dialogsData.map(d => (<Dialog name={d.name} id={d.id}/>));
    let messageElements = messages.map(m => <Message message={m.message}/> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>

        </div>
    );
}

export default Dialogs;