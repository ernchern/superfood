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
					<Fade left duration={1250}>
						<h1><span style={{color:'#cfaddb',fontSize:'1em'}}>SUPER</span>FOOD</h1>
					</Fade>
					<Fade delay={1000}>
						<h5>A personalized meal plan made just for you</h5>
					</Fade>
					<div className="buttons">
						<button className="login-button" onClick={() => this.props.setPage("register")}>
							<span className="register-button">Register now</span>
						</button>
						<button className="signin-button" onClick={() => this.props.setPage("signIn")}>
							<span>Sign In</span>
						</button>
					</div>
				</div>
            </Container>
        </section>
      )
    }
  }
  
  export default Login;
  