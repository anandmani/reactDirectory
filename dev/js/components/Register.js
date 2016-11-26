import React,{Component} from 'react';
import FieldGroup from './FieldGroup';
import DateSelector from './DateSelector';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';
// import {Form} from 'react-bootstrap';


class Register extends Component{

  constructor(){
    super();
    // this.state = {value: ''};
    // this.getValidationState = this.getValidationState.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <form>
        <FieldGroup id="formControlsFirstname" type="text" label="First name" placeholder="Enter first name"/>

        <FieldGroup id="formControlsLastname" type="text" label="Last name" placeholder="Enter last name"/>

        <FieldGroup id="formControlsAge" type="text" label="Age" placeholder="Enter age"/>

        <DateSelector/>

        <FormGroup controlId="formControlsGender">
          <ControlLabel>Gender</ControlLabel>
          <FormControl componentClass="select">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </FormControl>
        </FormGroup>

        <FieldGroup id="formControlPhone" type="text" label="Phone" placeholder="Enter phone number"/>

        <FormGroup controlId="formControlsAdditionalInfo">
         <ControlLabel>Additional Information</ControlLabel>
         <FormControl componentClass="textarea" placeholder="Enter Additional Information" />
       </FormGroup>

       <Button type="submit">Submit</Button>

      </form>
    );
  }

}



export default Register;
