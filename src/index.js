import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
    {id: 1, post: 'Hi, how are you?', likesCount: 2},
    {id: 2, post: 'it\'s my first post', likesCount: 45},
]
const dialogsData = [
    {id: 1, name: 'Ani'},
    {id: 2, name: 'Arev'},
    {id: 3, name: 'Anush'},
    {id: 4, name: 'Artur'},
    {id: 5, name: 'Andre'},
    {id: 6, name: 'Angel'},
]
const messageData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yes'},
    {id: 4, message: 'How are you?'},
    {id: 5, message: 'Like you<->'},
    {id: 6, message: 'Like Me'},
]
ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} messageData={messageData} dialogsData={dialogsData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
