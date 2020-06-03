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
					<Fade left duration={2500}>
						<h1>SUPERFOOD</h1>
					</Fade>
					<Fade delay={2500}>
						<h5>A personalized meal plan made just for you</h5>
					</Fade>
					<div className="buttons">
						<button className="login-button" onClick={() => this.props.setPage("register")}>
							<span className="register-button">Register now</span>
						</button>
						<button className="signin-button"><span>Sign In</span></button>
					</div>
				</div>
            </Container>
        </section>
      )
    }
  }
  
  export default Login;
  