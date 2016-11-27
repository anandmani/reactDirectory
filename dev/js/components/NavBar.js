import React, {Component} from 'react';
import {Nav, NavItem} from 'react-bootstrap';

class NavBar extends Component{

  constructor(){
    super();
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedKey) {
    alert('selected ' + selectedKey);
  }

  render(){
    return(
      <div>
        <Nav bsStyle="pills" activeKey={1} onSelect={this.handleSelect} id="navBar">
          <NavItem eventKey={1} title="Register a patient">Register</NavItem>
          <NavItem eventKey={2} title="Search patients">Directory</NavItem>
        </Nav>
        {this.props.children}
      </div>
    );
  }
}


export default NavBar;
