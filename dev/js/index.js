import 'babel-polyfill';
import 'babel-plugin-transform-object-rest-spread';
import React from 'react';
import ReactDOM from "react-dom";

import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
<App/>,document.getElementById('root')
);
