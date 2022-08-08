import React from "react"
import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(d => (<Dialog name={d.name} id={d.id} image={d.url}/>));
    let messageElements = props.state.messages.map(m => <Message message={m.message} sender={m.sender}/> );

    let newMessageReference = React.createRef();

    const sendNewMessage = () => {
        let sender = "me"
        props.dispatch({type: "SEND-NEW-MESSAGE", sender: sender});
    }

    const updateNewMessageText = () => {
        let text = newMessageReference.current.value;
        props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newText: text});
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div className={s.newMessageArea}>
                    <textarea onChange={updateNewMessageText} ref={newMessageReference} cols="60" rows="2" value={props.state.newMessageText}></textarea>
                    <button
                       onClick={sendNewMessage} className={s.sent}>Sent</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;