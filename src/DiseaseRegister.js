import React from 'react';
import './App.css';
import { Col, Row, Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

class DiseaseRegister extends React.Component {
    constructor(props) {
      super(props);
	  
	  this.state = {
		disease: false
	  }
	  
	  this.props.setResponse("diabetes",false);
	  this.props.setResponse("hypertension",false);
	  
	  this.showOptions = this.showOptions.bind(this);
	  this.hideOptions = this.hideOptions.bind(this);
    }
	
	showOptions() {
		this.setState({disease:true});
	}
	
	hideOptions() {
		this.setState({disease:false});
	}
  
    render() { 
		const disease = this.state.disease;
		let options;
		if (disease) {
			options = 
			<Fade>
			<div>
				<p className="question">Choose type(s) of health restriction:</p>
				<div>
				  <label className="checkbox-inline"><input type="checkbox" onChange={(event) => this.props.setResponse("diabetes",event.target.checked)}/>Diabetes</label>
				  <label className="checkbox-inline"><input type="checkbox" onChange={(event) => this.props.setResponse("hypertension", event.target.checked)}/>Hypertension</label>
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
						<Col lg="8" align='center'>
							<div className="register-text">
								<div className="section-title">
									<h2>Register Now</h2>
								</div>
								<div className="form-register">
									<div className="steps clearfix">
										<ul role="tablist">
											<li role="tab" aria-disabled="false" className="first" aria-selected="true"><a id="form-total-t-0" onClick={() => this.props.goToId(0)} aria-controls="form-total-p-0"><span className="current-info audible"></span><span className="title">1</span></a></li>
											<li role="tab" aria-disabled="false" className="second"><a id="form-total-t-1" onClick={() => this.props.goToId(1)} aria-controls="form-total-p-1"><span className="title">2</span></a></li>
											<li role="tab" aria-disabled="false" className="last current"><a id="form-total-t-2" onClick={() => this.props.goToId(2)} aria-controls="form-total-p-2"><span className="title">3</span></a></li>
										</ul>
									</div>
								</div>
								<form action="#" className="allergy-form">
									<Col lg="8" className="d-flex justify-content-center">
										<div>
											<p className="question">Do you have any health restriction?</p>
											<div>
											  <label className="radio-inline"><input type="radio" name="disease" onChange={this.showOptions}/>Yes</label>
											  <label className="radio-inline"><input type="radio" name="disease" onChange={this.hideOptions}/>No</label>
											</div>
										</div>
									</Col>
									<Col lg="7" className="d-flex justify-content-center">
									{options}
									</Col>
									<Col lg="12" style={{height:"80px"}}>
										<p className="btn register-btn1" onClick={() => this.props.goToId(1)}>&#171; Back</p>
										<p className="btn register-btn3" onClick={this.props.nextStage}>Submit &#187;</p>
									</Col>
								</form>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		);
    }
  }
  
export default DiseaseRegister;