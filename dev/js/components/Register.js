import React,{Component} from 'react';
import FieldGroup from './FieldGroup';
import DateSelector from './DateSelector';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';
// import {Form} from 'react-bootstrap';


class Register extends Component{

  constructor(){
    super();
    this.updateFormInput = this.updateFormInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.state={
                fname:    {value:'',              vState:null,        required:true},
                lname:    {value:'',              vState:null,        required:true},
                age:      {value:'',              vState:null,        required:true},
                date:     {value:'1-1-2016',      vState:'success',   required:true},
                gender:   {value:'Female',        vState:'success',   required:true},
                phone:    {value:'',              vState:null,        required:true},
                addInfo:  {value:'',              vState:null,        required:false}
              };
  }

  updateFormInput(field, metaObj){
    // console.log("field, metaObj",field,metaObj);
    this.setState({[`${field}`]:metaObj}); //In a javascript object we can refer to the key with or without quotes  //Using [" "] format to refer to object key
  }

  handleChange(e, field){
    var newMetaObj = Object.assign({},this.state[field],{value:e.target.value});
    // console.log("new meta obj",newMetaObj);
    this.updateFormInput(field, newMetaObj);
  }

  submitForm(event){
    var flag = 0;
    var payload = {};
    for(var field in this.state){
      if(this.state.hasOwnProperty(field)){
        if(this.state[field].required == true && this.state[field].vState!=='success'){ //Submitting form without filling out field. Therefore, we're making it's vState Error from null or whatever it was
          event.preventDefault();
          var newMetaObj = Object.assign({},this.state[field],{vState:'error'});
          this.setState({[`${field}`]:newMetaObj});
          flag = 1;   //Dont have to make POST call
        }
      }
    }

    if(flag == 0){//Make POST call
      for(var field in this.state){
        if(this.state.hasOwnProperty(field)){
          // payload = {fname:"anand", lanme:"Mani",....}
          payload[field] = this.state[field].value;
        }
      }
      console.log("making post call with ",payload);
    }

  }

  render() {
    // console.log(this.state);
    return (
      <form id="registerForm">
        <FieldGroup id="formControlsFirstname" type="text" label="First name" meta={this.state.fname} updateMeta={this.updateFormInput.bind(this,"fname")} help="Firstname is a required field"/>

        <FieldGroup id="formControlsLastname" type="text" label="Last name" meta={this.state.lname} updateMeta={this.updateFormInput.bind(this,"lname")} help="Lastname is a required field"/>

        <FieldGroup id="formControlsAge" type="text" label="Age" meta={this.state.age} updateMeta={this.updateFormInput.bind(this,"age")} help="Enter valid positive age"/>

        <DateSelector meta={this.state.date} updateMeta={this.updateFormInput.bind(this,"date")} />

        <FormGroup controlId="formControlsGender">
          <ControlLabel>Gender</ControlLabel>
          <FormControl componentClass="select" value={this.state.gender.value} onChange={  (e)=>{ this.handleChange(e,"gender") }  } >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </FormControl>
        </FormGroup>

        <FieldGroup id="formControlPhone" type="text" label="Phone" meta={this.state.phone} updateMeta={this.updateFormInput.bind(this,"phone")} help="Enter valid phone number of the format: +91-9663036666"/>

        <FormGroup controlId="formControlsAdditionalInfo">
         <ControlLabel>Additional Information</ControlLabel>
         <FormControl componentClass="textarea" value={this.state.addInfo.value} onChange={  (e)=>{ this.handleChange(e,"addInfo") }  } />
       </FormGroup>

       <Button type="submit" onClick={this.submitForm}>Submit</Button>

      </form>
    );
  }

}



export default Register;
