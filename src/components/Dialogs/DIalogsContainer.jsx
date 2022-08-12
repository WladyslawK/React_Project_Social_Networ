import React from "react"
import {sendNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/Dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store().dialogPage;

    const onSendNewMessage = () => {
        props.dispatch(sendNewMessageActionCreator());
    }

    const onUpdateNewMessageText = (text) => {
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return (<Dialogs dialogsElements = {state.dialogsData} messagesElements = {state.messages} newMessageText = {state.newMessageText}
                     sendNewMessage={onSendNewMessage} updateNewMessageText = {onUpdateNewMessageText} />);
}

export default DialogsContainer;