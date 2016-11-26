import React, {Component} from 'react';
import {Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';

class DateSelector extends Component{
  constructor(){
    super();
    this.dayDropdown = this.dayDropdown.bind(this);
  }

  dayDropdown(){
    var days =[];
    for(var i=1;i<=31;i++){
      days.push(i);
    }
    return days.map((item,index)=>{
      return <option key={index} value={`${item}`}>{item}</option>
    });
  }

  monthDropdown(){
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return months.map(
      (item,index)=>{
        return <option key={index} value={`${item}`}>{item}</option>
      }
    );
  }

  yearDropdown(){
      var years=[];
      var d = new Date();
      var current_year = d.getFullYear();//current year
      for(var i =current_year; i>=1905; i--){
        years.push(i);
      }
      return years.map(
        (item,index)=>{
          return <option key={index} value={`${item}`}>{item}</option>
        }
      );
  }

  render(){
    return(//using componentClass = fieldset because otherwise warning comes saying, form cannot be child of form.
      <Form componentClass="fieldset" inline>

        <FormGroup controlId="formControlsDay">
        <ControlLabel>Day</ControlLabel>
        <FormControl componentClass="select">
          {this.dayDropdown()}
        </FormControl>
        </FormGroup>

        <FormGroup controlId="formControlsMonth">
        <ControlLabel>Month</ControlLabel>
        <FormControl componentClass="select">
          {this.monthDropdown()}
        </FormControl>
        </FormGroup>

        <FormGroup controlId="formControlsYear">
        <ControlLabel>Year</ControlLabel>
        <FormControl componentClass="select">
          {this.yearDropdown()}
        </FormControl>
        </FormGroup>

      </Form>
    );
  }

}

export default DateSelector;
