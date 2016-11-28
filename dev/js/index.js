import 'babel-polyfill';
import 'babel-plugin-transform-object-rest-spread';
import React from 'react';
import ReactDOM from "react-dom";
import NavBar from './components/NavBar';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/stylesheet.css';
import {Router, Route, hashHistory, IndexRoute, browserHistory, Redirect } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory} >
   <Route path="/" component={NavBar}>
      <IndexRoute component={Register}/>
      <Route path="/register" component={Register}/>
   </Route>
 </Router>
 ,document.getElementById('root')
);
