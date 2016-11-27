import React, {Component} from 'react';
import {Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';

class DateSelector extends Component{
  constructor(){
    super();
    this.dayDropdown = this.dayDropdown.bind(this);
    this.parseDate = this.parseDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.dayValue = null;
    this.monthValue = null;
    this.yearValue = null;
  }

  parseDate(){
      var dateArray = this.props.meta.value.split("-");
      this.dayValue = dateArray[0];
      this.monthValue = dateArray[1];
      this.yearValue = dateArray[2];
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
        return <option key={index} value={`${index+1}`}>{item}</option>
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

  handleChange(event,field){
    var newDate = null;
    switch (field) {
      case "day":
        newDate = [event.target.value, this.monthValue, this.yearValue].join("-");
      break;

      case "month":
        newDate = [this.dayValue, event.target.value, this.yearValue].join("-");
      break;

      case "year":
        newDate = [this.dayValue, this.monthValue, event.target.value].join("-");
      break;

      default:
        throw new Error('Check handleChange DateSelector');
      break;
    }
    // console.log("newDate is ",newDate);
    var newMetaObj = Object.assign({},this.props.meta,{value: newDate});
    // console.log("new metaobj",newMetaObj);
    this.props.updateMeta(newMetaObj);
  }

  render(){
    this.parseDate();
    return(//using componentClass = fieldset because otherwise warning comes saying, form cannot be child of form.
      <Form componentClass="fieldset" inline>

        <FormGroup controlId="formControlsDay" className="dateSegment">
        <ControlLabel>Day</ControlLabel>
        <FormControl componentClass="select" value={this.dayValue} onChange={ (e)=>{ this.handleChange(e,"day")} } >
          {this.dayDropdown()}
        </FormControl>
        </FormGroup>

        <FormGroup controlId="formControlsMonth" className="dateSegment">
        <ControlLabel>Month</ControlLabel>
        <FormControl componentClass="select" value={this.monthValue} onChange={ (e)=>{ this.handleChange(e,"month")} } >
          {this.monthDropdown()}
        </FormControl>
        </FormGroup>

        <FormGroup controlId="formControlsYear" className="dateSegment">
        <ControlLabel>Year</ControlLabel>
        <FormControl componentClass="select" value={this.yearValue} onChange={ (e)=>{ this.handleChange(e,"year")} } >
          {this.yearDropdown()}
        </FormControl>
        </FormGroup>

      </Form>
    );
  }

}

export default DateSelector;
