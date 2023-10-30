import React from 'react';
import ReactDOM from 'react-dom/client';

function Kid(props) {
    return <h2>A {props.personality} girl!</h2>
}

function Kindergarden() {
    return (
    <>
      <h1>Who is/are in my Kindergarden?</h1>
      <Kid personality="naughty"/> 
    </>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Kindergarden />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

