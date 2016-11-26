import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

class FieldGroup extends Component{
  constructor(){
    super();
    this.getValidationState = this.getValidationState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clickedInput = this.clickedInput.bind(this);
    this.state = {value:'', clicked:false};
  }

  clickedInput(){  //The validation states: success,warning,failure should be applied only if the field is cliked, i.e, by default when the page loads, no validation state is set.
      this.setState({clicked:true});
  }

  getValidationState(){
    if(this.state.clicked == false) return '';

    switch(this.props.label){

      case "First name":
      case "Last name":
        if(this.state.value.length == 0) return 'error';
        else return 'success';
      break;

      case "Age":
        if(this.state.value > 0 && this.state.value<130) return 'success';
        else if(this.state.value >= 130) return 'warning';
        else return 'error';
      break;

      case "Phone":
        if(this.state.value.length>20 || this.state.value.length<7) return 'error';
        for(var i =0; i<this.state.value.length; i++){
          if( !isNaN(this.state.value[i])||this.state.value[i]=='+'||this.state.value[i]=='-' ) return 'success';
          else return 'error';
        }
      break;

      default:
      break;
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render(){
    return (//note validationState is not assigned a function. it is assigned the function's return value
      <FormGroup controlId={this.props.id} validationState={this.getValidationState()}>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl {...this.props} onChange={this.handleChange} value={this.state.value} onClick={this.clickedInput}/>
        {this.props.help && <HelpBlock>{this.props.help}</HelpBlock>}
      </FormGroup>
    );
  }
}

export default FieldGroup;
