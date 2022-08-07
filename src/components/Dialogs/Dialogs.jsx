import React from "react"
import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(d => (<Dialog name={d.name} id={d.id} image={d.url}/>));
    let messageElements = props.state.messages.map(m => <Message message={m.message}/> );

    let newMessageReference = React.createRef();

    const sendNewMessage = () => {
        let message = newMessageReference.current.value;
        alert(message);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div className={s.newMessageArea}>
                    <textarea ref={newMessageReference} cols="60" rows="2"></textarea>
                    <button
                       onClick={sendNewMessage} className={s.sent}>Sent</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;