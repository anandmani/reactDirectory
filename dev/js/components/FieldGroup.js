import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

class FieldGroup extends Component{
  constructor(){
    super();

    this.handleChange = this.handleChange.bind(this);
    this.clickedInput = this.clickedInput.bind(this);

    this.state = {clicked:false};
  }

  clickedInput(){  //The validation states: success,warning,failure should be applied only if the field is cliked, i.e, by default when the page loads, no validation state is set.
      this.setState({clicked:true});
  }

  updateValidationState(inputValue){
    if(this.state.clicked == false) return null;

    switch(this.props.label){
      case "First name":
      case "Last name":
        if(inputValue.length == 0) return 'error';
        else return 'success';
      break;

      case "Age":
        if(inputValue > 0 && inputValue<130) return 'success';
        else if(inputValue >= 130) return 'warning';
        else return 'error';
      break;

      case "Phone":
        if(inputValue.length>20 || inputValue.length<7) return 'error';
        for(var i =0; i<inputValue.length; i++){
          if( !isNaN(inputValue[i])||inputValue[i]=='+'||inputValue[i]=='-' ) return 'success';
          else return 'error';
        }
      break;

      default:
      break;
    }
  }

  handleChange(e) {
    var newVState = this.updateValidationState(e.target.value); //We are passing the entered value here, because we are using Object.assign({},this.props.meta,) in handleChange and updateValidationState methods. Before updateValidationState method runs, the props does not change. Therefore, this.props will not result in updated value

    var newMetaObj = Object.assign({},this.props.meta,{value:e.target.value, vState:newVState});
    // console.log("new metaobj",newMetaObj);
    this.props.updateMeta(newMetaObj);
  }

  render(){
    return (//note validationState is not assigned a function. it is assigned the function's return value
      <FormGroup controlId={this.props.id} validationState={this.props.meta.vState}>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl type={this.props.type}  onChange={this.handleChange} value={this.props.meta.value} onClick={this.clickedInput}/>
        {this.props.help && <HelpBlock style={{display: (this.props.meta.vState == 'success' || this.props.meta.vState == null)?"none":"block"}}>{this.props.help}</HelpBlock>}
      </FormGroup>
    );
  }
}

export default FieldGroup;
