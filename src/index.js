import React from 'react';
import ReactDOM from 'react-dom/client';

const x = 9;
const myComponent = (
   <div>{(x)>8?
    <ul>
        <li>Learn React</li>
        <li>Create a weather app with React</li>
        <li>Join a P3 group</li>
        <li>Finish my P1</li>
    </ul> : "No Way"}
   </div>  
)
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(myComponent);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

