import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let postsData = [
    {id: 1, text: "Post 1", likes: 10 },
    {id: 2, text: "Post 2", likes: 15 },
    {id: 3, text: "Post 3", likes: 35 },
];

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

root.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
