const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE";

const dialogReducer = (state, action) => {
    if(action.type === UPDATE_NEW_MESSAGE_TEXT){
            state.newMessageText = action.newText;
        }else if(action.type === SEND_NEW_MESSAGE){
            let newMessage = {
                id: 3,
                sender: action.sender,
                message: state.newMessageText,
            }
            state.messages.push(newMessage);
            state.newMessageText = "";
        }
    return state;
}

export const sendNewMessageActionCreator = () => ({type: SEND_NEW_MESSAGE, sender: "me",});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text,});

export default dialogReducer;