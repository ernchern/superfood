import React from 'react';
import './App.css';
import { Col, Row, Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

class AllergyRegister extends React.Component {
    constructor(props) {
      super(props);
	  
	  this.state = {
		allergy: false
	  }
	  
	  this.showAllergy = this.showAllergy.bind(this);
	  this.hideAllergy = this.hideAllergy.bind(this);
    }
	
	showAllergy() {
		this.setState({allergy:true});
		this.props.setResponse("nopeanut",false);
		this.props.setResponse("nomilk",false);
	}
	
	hideAllergy() {
		this.setState({allergy:false});
		this.props.setResponse("nopeanut",false);
		this.props.setResponse("nomilk",false);
	}
  
    render() { 
		const allergy = this.state.allergy;
		let options;
		if (allergy) {
			options = 
			<Fade>
			<div>
				<p className="question">Choose type(s) of food allergy:</p>
				<div>
				  <label className="checkbox-inline"><input type="checkbox" onChange={(event) => this.props.setResponse("nopeanut",event.target.checked)}/><p class="radio-button">Peanuts</p></label>
				  <label className="checkbox-inline"><input type="checkbox" onChange={(event) => this.props.setResponse("nomilk", event.target.checked)}/><p class="radio-button">Milk</p></label>
				</div>
			</div>
			</Fade>;
		} else {
			options = <div></div>;
		}
		return (
			<section className="register-section container-box">
				<Container>
					<Row>
						<Col lg="2"></Col>
						<Col lg="8" align='center'>
							<div className="register-text">
								<div className="section-title">
									<h2>Register Now</h2>
								</div>
								<div className="form-register">
									<div className="steps clearfix">
										<ul role="tablist">
											<li role="tab" aria-disabled="false" className="first" aria-selected="true"><a id="form-total-t-0" onClick={() => this.props.goToId(0)} aria-controls="form-total-p-0"><span className="current-info audible"></span><span className="title">1</span></a></li>
											<li role="tab" aria-disabled="false" className="second current"><a id="form-total-t-1" onClick={() => this.props.goToId(1)} aria-controls="form-total-p-1"><span className="title">2</span></a></li>
											<li role="tab" aria-disabled="false" className="last"><a id="form-total-t-2" onClick={() => this.props.goToId(2)} aria-controls="form-total-p-2"><span className="title">3</span></a></li>
										</ul>
									</div>
								</div>
								<form action="#" className="allergy-form">
									<Col lg="6" className="d-flex justify-content-center">
										<div>
											<p className="question">Do you have any food allergy?</p>
											<div>
											  <label className="radio-inline"><input type="radio" name="allergy" onChange={this.showAllergy}/><p class="radio-button">Yes</p></label>
											  <label className="radio-inline"><input type="radio" name="allergy" onChange={this.hideAllergy}/><p class="radio-button">No</p></label>
											</div>
										</div>
									</Col>
									<Col lg="7" className="d-flex justify-content-center">
									{options}
									</Col>
									<Col lg="12" style={{height:"80px"}}>
										<p className="btn register-btn1" onClick={() => this.props.goToId(0)}>&#171; Back</p>
										<p className="btn register-btn2" onClick={this.props.nextStage}>Next &#187;</p>
									</Col>
								</form>
							</div>
						</Col>
						<Col lg="2"></Col>
					</Row>
				</Container>
			</section>
		);
    }
  }
  
export default AllergyRegister;