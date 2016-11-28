import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import DirectoryRow from './DirectoryRow';

class Directory extends Component{

  constructor(){
      super();
      this.listURL = "http://localhost:9000/patients/v1/patientDetails";
      this.searchURL = "http://localhost:9000/patients/v1/searchPatient/"; //need to append patient name to url
      this.listPatients = this.listPatients.bind(this);
      this.renderPatientList = this.renderPatientList.bind(this);
      this.checkEnter = this.checkEnter.bind(this);
      this.searchPatient = this.searchPatient.bind(this);
      this.state={patientList: []};
  }


  listPatients(){
    var http = new XMLHttpRequest();
    http.open("GET", this.listURL, true);

    http.onreadystatechange = ()=> {//Call a function when the state changes.
      if(http.readyState == 4 && http.status == 200) {
        console.log("GET> List Patients:",JSON.parse(http.responseText));
        this.setState({patientList: JSON.parse(http.responseText)});
        // Response object is of the form: {
        // DOB:"1-2-1960"
        // additional_info:"Bob is whack!"
        // age:99
        // firstname:"Bob"
        // gender:"Male"
        // lastname:"Marley"
        // patient_id:1
        // phone:"2222222222"  }
        //Note: the keys in this object are different from the keys of the patient object we send in our register form
      }
    }
    http.send(null);//When passing a payload in front-end, always JSON stringify the javascript object! javascript objects are not the same as JSON. Failure to do so may incorrectly show CORS failure
  }

  searchPatient(name){
    var http = new XMLHttpRequest();
    http.open("GET", this.searchURL+name, true);

    http.onreadystatechange = ()=> {//Call a function when the state changes.
      if(http.readyState == 4 && http.status == 200) {
        console.log("GET> Search Patients:",JSON.parse(http.responseText));
        this.setState({patientList: JSON.parse(http.responseText)});
      }
    }
    http.send(null);//When passing a payload in front-end, always JSON stringify the javascript object! javascript objects are not the same as JSON. Failure to do so may incorrectly show CORS failure
  }

  renderPatientList(){
      return this.state.patientList.map((patientObj,index)=>{
        return(
          <DirectoryRow patientObj={patientObj} key={index}/>
        );
      });
  }

  componentWillMount(){
      //Make List call
        console.log("Mounting Directory, fetching patient list");
        this.listPatients();
  }

  checkEnter(event){ //It doesn't matter if we use onKeyUp or onKeyDown here as we are ignoring the last character (enter) anyway. Thus, event.target.value will return the same in both cases
    //keyCode for Enter is 13
    if(event.keyCode == 13){
      event.preventDefault();
      console.log("Searching for patients with firstname "+ event.target.value);

      if(event.target.value.trim().length == 0)   this.listPatients(); //Search string is empty, Call List patients
      else this.searchPatient(event.target.value.trim());
    }
  }

  render(){
    return( //Add search bar
      <Grid id="directoryContents">
        <Row id="searchBar">
          <Col xs={4}>
            <textArea id="searchInput" placeholder="Search" onKeyDown={this.checkEnter} ref="searchInput" />
          </Col>
        </Row>
        <Row id="rowHeaderPatientList">
          <Col xs={4}>
            Patient ID
          </Col>
          <Col xs={4}>
            Firstname
          </Col>
          <Col xs={4}>
            Lastname
          </Col>
        </Row>
        {this.renderPatientList()}
      </Grid>
    );
  }

}

export default Directory;
