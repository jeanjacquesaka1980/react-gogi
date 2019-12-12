import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const WriteSmth = props => {
    return <h1>{props.wrod1}</h1>
}

const WriteSmthElse = props => {
    return <WriteSmth wrod1={props.word2}/>
}

const WriteAgainSmth = props => {
    return <WriteSmthElse word2={props.word3}/>
}

ReactDOM.render(<WriteAgainSmth word3="Hello" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
