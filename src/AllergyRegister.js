import React from 'react';
import './App.css';
import { Col, Row, Container } from 'react-bootstrap';

class AllergyRegister extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {  
      return (
        <section class="register-section container-box">
            <Container>
                <Row>
                    <Col lg="8">
                        <div className="register-text">
                            <div className="section-title">
                                <h2>Register Now</h2>
                            </div>
                            <div className="form-register">
                                <div className="steps clearfix ">
                                    <ul role="tablist">
                                    <   li role="tab" aria-disabled="false" className="first current" aria-selected="true"><a id="form-total-t-0" onClick={() => this.props.goToId(0)} aria-controls="form-total-p-0"><span className="current-info audible"> </span><span className="title">1</span></a></li>
                                        <li role="tab" aria-disabled="false"><a id="form-total-t-1" onClick={() => this.props.goToId(1)} aria-controls="form-total-p-1"><span className="title">2</span></a></li>
                                        <li role="tab" aria-disabled="false" className="last"><a id="form-total-t-2" onClick={() => this.props.goToId(2)} aria-controls="form-total-p-2"><span className="title">3</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <form action="#" class="register-form">
                                <Row>
                                    <Col lg="6" div className="d-flex justify-content-center">
                                        <p>Do you have allergies?</p>
                                    </Col>
                                    <Col lg="6" div className="d-flex justify-content-center">
                                        <Col xs="2" class="checkbox d-flex justify-content-center text-center">
                                            <label>
                                                <input type="checkbox"/>
                                                <span className="checkbox-icon-wrapper">
                                                    <span className="checkbox-icon glyphicon glyphicon-ok"></span>
                                                </span>
                                                Yes
                                            </label>
                                        </Col>
                                        <Col xs="2" className="checkbox d-flex justify-content-center text-center">
                                            <label>
                                                <input type="checkbox"/>
                                                <span className="checkbox-icon-wrapper">
                                                    <span className="checkbox-icon glyphicon glyphicon-ok"></span>
                                                </span>
                                                No
                                            </label>
                                        </Col>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="6" className="d-flex justify-content-center">
                                        <p>What are you allergic to?</p>
                                    </Col>
                                    <Col lg="6" className="d-flex justify-content-center">
                                        <Col xs="2" className="checkbox d-flex justify-content-center text-center">
                                            <label>
                                                <input type="checkbox"/>
                                                <span className="checkbox-icon-wrapper">
                                                    <span className="checkbox-icon glyphicon glyphicon-ok"></span>
                                                </span>
                                                Peanuts
                                            </label>
                                        </Col>
                                        <Col xs="2" className="checkbox d-flex justify-content-center text-center">
                                            <label>
                                                <input type="checkbox"/>
                                                <span className="checkbox-icon-wrapper">
                                                    <span className="checkbox-icon glyphicon glyphicon-ok"></span>
                                                </span>
                                                Milk
                                            </label>
                                        </Col>
                                    </Col>
                                </Row>
                                <p className="btn register-btn" onClick={this.props.nextStage}>Next</p>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
    }
  }
  
export default AllergyRegister;