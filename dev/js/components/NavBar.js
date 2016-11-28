import React, {Component} from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import {browserHistory} from 'react-router';

class NavBar extends Component{

  constructor(){
    super();
    this.handleSelect = this.handleSelect.bind(this);
    this.changeActiveKey = this.changeActiveKey.bind(this);
  }

  handleSelect(selectedKey) {
    console.log("Selected tab: "+selectedKey);
    const path = `/${selectedKey}`;
    browserHistory.push(path);
  }

  changeActiveKey(){
    // console.log(this.props.location.pathname); //This will return /register or /directory
    return this.props.location.pathname.slice(1); //slice from index 1 ...to end of string
  }

  render(){
    return(
      <div>
        <Nav bsStyle="pills"  activeKey={this.changeActiveKey()} onSelect={this.handleSelect} id="navBar">
          <NavItem eventKey={"register"} title="Register a patient">Register</NavItem>
          <NavItem eventKey={"directory"} title="Search patients">Directory</NavItem>
        </Nav>
        {this.props.children}
      </div>
    );
  }
}


export default NavBar;
