import React from 'react';
import './App.css';
import { Col, Row, Container } from 'react-bootstrap';

class PersonalRegister extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {  
      return (
        <section className="register-section container-box">
            <Container>
                <Row>
                    <Col lg="8">
                        <div className="register-text align-content-center">
                            <div className="section-title">
                                <h2>Register Now</h2>
                            </div>
                            <div className="form-register">
                                <div className="steps clearfix">
                                    <ul role="tablist">
                                        <li role="tab" aria-disabled="false" className="first current" aria-selected="true"><a id="form-total-t-0" onClick={() => this.props.goToId(0)} aria-controls="form-total-p-0"><span className="current-info audible"> </span><span className="title">1</span></a></li>
                                        <li role="tab" aria-disabled="false"><a id="form-total-t-1" onClick={() => this.props.goToId(1)} aria-controls="form-total-p-1"><span className="title">2</span></a></li>
                                        <li role="tab" aria-disabled="false" className="last"><a id="form-total-t-2" onClick={() => this.props.goToId(2)} aria-controls="form-total-p-2"><span className="title">3</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <form action="#" className="register-form">
                                <Row>
                                    <Col lg="6">
                                        <label>First Name</label>
                                        <input type="text" id="name" onChange={(event) => this.props.setResponse("name", event.target.value)}/>
                                    </Col>
                                    <Col lg="6">
                                        <label>Last Name</label>
                                        <input type="text" id="email" onChange={(event) => this.props.setResponse("lastName", event.target.value)}/>
                                    </Col>
                                    <Col lg="6">
                                        <label>Your email address</label>
                                        <input type="text" id="email" onChange={(event) => this.props.setResponse("email", event.target.value)}/>
                                    </Col>
                                    <Col lg="6">
                                        <label>Mobile No</label>
                                        <input type="text" id="mobile" onChange={(event) => this.props.setResponse("mobile", event.target.value)}/>
                                    </Col>
                                    <Col lg="6">
                                        <label>Country</label>
                                        <input type="text" id="country" onChange={(event) => this.props.setResponse("country", event.target.value)}/>
                                    </Col>
                                    <Col lg="6">
                                        <label>Weight (optional)</label>
                                        <input type="text" id="country" onChange={(event) => this.props.setResponse("weight", event.target.value)}/>
                                    </Col>
                                    <Col lg="6">
                                        <label>Height (optional)</label>
                                        <input type="text" id="country" onChange={(event) => this.props.setResponse("height", event.target.value)}/>
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
  
export default PersonalRegister;