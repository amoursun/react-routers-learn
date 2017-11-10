import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

// react-router 4
ReactDOM.render(
    <BrowserRouter
        keyLength={12}>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));
