import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore();
root.render(
    <Provider store={ store }>
        <App />
    </Provider>
);
