import React,{Component} from 'react';
import FieldGroup from './FieldGroup';
import DateSelector from './DateSelector';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';
// import {Form} from 'react-bootstrap';


class Register extends Component{

  constructor(){
    super();
    this.state={
                fname:    {value:'', state:''},
                lname:    {value:'', state:''},
                age:      {value:'', state:''},
                date:     {value:'', state:''},
                gender:   {value:'', state:''},
                phone:    {value:'', state:''},
                addInfo:  {value:'', state:''}
                }
  }

  render() {
    console.log(this.state);
    return (
      <form>
        <FieldGroup id="formControlsFirstname" type="text" label="First name" meta={this.state.fname} help="Firstname is a required field"/>

        <FieldGroup id="formControlsLastname" type="text" label="Last name" meta={this.state.lname} help="Lastname is a required field"/>

        <FieldGroup id="formControlsAge" type="text" label="Age" meta={this.state.age} help="Enter valid positive age"/>

        <DateSelector meta={this.state.date} />

        <FormGroup controlId="formControlsGender">
          <ControlLabel>Gender</ControlLabel>
          <FormControl componentClass="select">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </FormControl>
        </FormGroup>

        <FieldGroup id="formControlPhone" type="text" label="Phone" meta={this.state.fname} help="Enter valid phone number of the format: +91-9663036666"/>

        <FormGroup controlId="formControlsAdditionalInfo">
         <ControlLabel>Additional Information</ControlLabel>
         <FormControl componentClass="textarea" />
       </FormGroup>

       <Button type="submit">Submit</Button>

      </form>
    );
  }

}



export default Register;
