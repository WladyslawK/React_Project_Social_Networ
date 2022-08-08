import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, sendNewMessage, updateNewMessageText, updateNewPostText} from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export function rerenderAlltree(state){
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}
                updateNewMessageText={updateNewMessageText} sendeNewMessage={sendNewMessage}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
