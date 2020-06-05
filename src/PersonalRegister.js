import React from 'react';
import './App.css';
import { Col, Row, Container } from 'react-bootstrap';
import Select from "react-select";
import { countries } from './countryList.js';
import PropTypes from 'prop-types';


class PersonalRegister extends React.Component {
    constructor(props) {
      super(props);
    }
	
	static contextTypes = {
		encrypt: PropTypes.func.isRequired,
	}
	
    render() {
	const {
      encrypt
    } = this.context;
	
      return (
        <section className="register-section container-box">
            <Container>
                <Row>
                    <Col lg="8">
                        <div className="register-text align-content-center">
                            <div className="section-title">
                                <h2 align='center'>Register Now</h2>
                            </div>
                            <div className="form-register">
                                <div className="steps clearfix">
                                    <ul role="tablist">
                                        <li role="tab" aria-disabled="false" className="first current" aria-selected="true"><a id="form-total-t-0" onClick={() => this.props.goToId(0)} aria-controls="form-total-p-0"><span className="current-info audible"></span><span className="title">1</span></a></li>
                                        <li role="tab" aria-disabled="false" className="second"><a id="form-total-t-1" onClick={() => this.props.goToId(1)} aria-controls="form-total-p-1"><span className="title">2</span></a></li>
                                        <li role="tab" aria-disabled="false" className="last"><a id="form-total-t-2" onClick={() => this.props.goToId(2)} aria-controls="form-total-p-2"><span className="title">3</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <form action="#" className="register-form">
                                <Row>
                                    <Col lg="6">
                                        <label>First Name<span style={{color:'red'}}>*</span></label>
                                        <input autoComplete='off' type="text" id="name" onChange={(event) => this.props.setResponse("name", event.target.value)}
										value={this.props.responseData.name}/>
                                    </Col>
                                    <Col lg="6">
                                        <label>Last Name<span style={{color:'red'}}>*</span></label>
                                        <input autoComplete='off' type="text" id="lastname" onChange={(event) => this.props.setResponse("lastName", event.target.value)}
										value={this.props.responseData.lastName}/>
                                    </Col>
                                    <Col lg="6">
                                        <label>E-mail Address<span style={{color:'red'}}>*</span></label>
                                        <input autoComplete='off' type="text" id="email" onChange={(event) => this.props.setResponse("email", event.target.value)}
										value={this.props.responseData.email}/>
                                    </Col>
                                    <Col lg="6">
                                        <label>Password<span style={{color:'red'}}>*</span></label>
                                        <input type="password" name="password" autoComplete='off' id="password" onChange={(event) => this.props.setResponse("password", encrypt(event.target.value))}/>
                                    </Col>
                                    <Col lg="12" className="country-col">
                                        <label>Country of Residence<span style={{color:'red'}}>*</span></label>
										<Select maxMenuHeight="1000" placeholder={<div></div>} styles={ {valueContainer: base => ({height:'46px', paddingLeft:'10px'})}} 
										options={countries} onChange={(value) => this.props.setResponse("country", value.label)}
										defaultValue={{ label:this.props.responseData.country, value:this.props.responseData.country}}/>
                                    </Col>
                                    <Col lg="6">
                                        <label>Weight</label>
                                        <input autoComplete='off' type="text" id="weight" onChange={(event) => this.props.setResponse("weight", event.target.value)}
										value={this.props.responseData.weight}/>
                                    </Col>
                                    <Col lg="6">
                                        <label>Height</label>
                                        <input autoComplete='off' type="text" id="height" onChange={(event) => this.props.setResponse("height", event.target.value)}
										value={this.props.responseData.height}/>
                                    </Col>
									<Col lg="12">
										<p className="btn register-btn1" onClick={this.props.goBack}>&#171; Back</p>
										<p className="btn register-btn2" onClick={this.props.nextStage}>Next &#187;</p>
									</Col>
								</Row>
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