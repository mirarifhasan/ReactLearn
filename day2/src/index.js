import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const element = <h1>Welcome</h1>

let user = {
    fname: 'Arif',
    lname: 'Hasan',
    color: 'Blue'
}

// Example 1: Sending single perameter to function
// ReactDOM.render(<App name="Mir"/>, document.getElementById('root'));


// Example 2: Sending object perameter to function
// Example 3: Sending object perameter to class
ReactDOM.render(<App name={user} tag="boss"/>, document.getElementById('root'));
