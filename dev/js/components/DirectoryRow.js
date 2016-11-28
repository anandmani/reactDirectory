import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import {Modal, Button} from 'react-bootstrap';

class DirectoryRow extends Component{
  constructor(){
      super();
      this.close = this.close.bind(this);
      this.open = this.open.bind(this);
      this.state={showModal: false};
  }

  close(){
      this.setState({showModal: false});
  }

  open(){
      this.setState({showModal: true});
  }

  render(){
    return(
      <Row className="rowPatientList" onClick={this.open}>
        <Col xs={4}>
          {this.props.patientObj.patient_id}
        </Col>
        <Col xs={4}>
          {this.props.patientObj.firstname}
        </Col>
        <Col xs={4}>
          {this.props.patientObj.lastname}
        </Col>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.patientObj.firstname} {this.props.patientObj.lastname}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col xs={4} className="modalRowDescription">ID:</Col>
              <Col xs={8}> {this.props.patientObj.patient_id} </Col>
            </Row>
            <Row>
              <Col xs={4} className="modalRowDescription">Age:</Col>
              <Col xs={8}> {this.props.patientObj.age} </Col>
            </Row>
            <Row>
              <Col xs={4} className="modalRowDescription">Date of Birth:</Col>
              <Col xs={8}> {this.props.patientObj.DOB} </Col>
            </Row>
            <Row>
              <Col xs={4} className="modalRowDescription">Gender:</Col>
              <Col xs={8}> {this.props.patientObj.gender} </Col>
            </Row>
            <Row>
              <Col xs={4} className="modalRowDescription">Phone:</Col>
              <Col xs={8}> {this.props.patientObj.phone} </Col>
            </Row>
            <Row>
              <Col xs={4} className="modalRowDescription">Additional Info:</Col>
              <Col xs={8}> {this.props.patientObj.additional_info} </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>

      </Row>
    );
  }
}

export default DirectoryRow;
