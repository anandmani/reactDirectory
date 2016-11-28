import 'babel-polyfill';
import 'babel-plugin-transform-object-rest-spread';
import React from 'react';
import ReactDOM from "react-dom";
import NavBar from './components/NavBar';
import Register from './components/Register';
import Directory from './components/Directory';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/stylesheet.css';
import {Router, Route, hashHistory, IndexRoute, browserHistory, Redirect } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory} >
   <Route path="/" component={NavBar}>
      <IndexRoute component={Register}/>
      <Route path="/register" component={Register}/>
      <Route path="/directory" component={Directory}/>
   </Route>
   <Route path="/reactDirectory/src/" component={NavBar}>
      <IndexRoute component={Register}/>
      <Route path="/reactDirectory/src/register" component={Register}/>
      <Route path="/reactDirectory/src/directory" component={Directory}/>
   </Route>
 </Router>
 ,document.getElementById('root')
);
