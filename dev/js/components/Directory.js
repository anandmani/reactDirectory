import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class Directory extends Component{

  constructor(){
      super();
      this.listURL = "http://localhost:9000/patients/v1/patientDetails";
      this.searchURL = "http://localhost:9000/patients/v1/searchPatient/"; //need to append patient name to url
      this.listPatients = this.listPatients.bind(this);
      this.renderPatientList = this.renderPatientList.bind(this);
      this.state={patientList: []};
  }


  listPatients(){
    var http = new XMLHttpRequest();
    http.open("GET", this.listURL, true);

    http.onreadystatechange = ()=> {//Call a function when the state changes.
      if(http.readyState == 4 && http.status == 200) {
        console.log("Received from GET:",JSON.parse(http.responseText));
        this.setState({patientList: JSON.parse(http.responseText)});
        // Response object is of the form: {
        // DOB:"1-2-1960"
        // additional_info:"Bob is whack!
        // "age:99
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

  renderPatientList(){
      return this.state.patientList.map((patientObj,index)=>{
        return(
          <Row key={index} className="rowPatientList">
            <Col xs={3}>
              {patientObj.patient_id}
            </Col>
            <Col xs={3}>
              {patientObj.firstname}
            </Col>
            <Col xs={3}>
              {patientObj.lastname}
            </Col>
          </Row>
        );
      });
  }

  componentWillMount(){
      //Make List call
        console.log("Mounting Directory, fetching patient list");
        this.listPatients();
  }

  render(){
    return( //Add search bar
      <Grid id="directoryContents">
        <Row id="rowHeaderPatientList">
          <Col xs={3}>
            Patient ID
          </Col>
          <Col xs={3}>
            Firstname
          </Col>
          <Col xs={3}>
            Lastname
          </Col>
        </Row>
        {this.renderPatientList()}
      </Grid>
    );
  }

}

export default Directory;
