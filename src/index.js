import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

const Entry = (
    <div>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </div>
);

ReactDOM.render(Entry, document.getElementById('root'));
//registerServiceWorker();
