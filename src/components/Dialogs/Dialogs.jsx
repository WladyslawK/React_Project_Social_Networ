import React from "react"
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {



    let dialogsElements = props.dialogsData.map(d => (<Dialog name={d.name} id={d.id}/>));
    let messageElements = props.messages.map(m => <Message message={m.message}/> );

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