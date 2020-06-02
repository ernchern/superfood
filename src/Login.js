import React from 'react';
import './App.css';
import { Col, Row, Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

class Login extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {  
      return (
        <section className="main-section background-box">
            <Container>
				<div className="main-section-text">
					<Fade left duration={2000}>
						<h1>SUPERFOOD</h1>
					</Fade>
					<Fade delay={2500}>
						<h5>A personalized meal plan made just for you</h5>
					</Fade>
					<div>
						<button className="secondary-btn" onClick={() => this.props.setPage("register")}>Register</button>
						<button className="secondary-btn" >Sign In</button>
					</div>
				</div>
            </Container>
        </section>
      )
    }
  }
  
  export default Login;
  