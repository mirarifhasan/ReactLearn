import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// If we execute the following line, then, the previous line will be overwrite
// ReactDOM.render(<Button />, document.getElementById('root'));