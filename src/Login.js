import React from 'react';
import './App.css';
import { Col, Row, Container } from 'react-bootstrap';

class Login extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {  
      return (
        <section className="main-section background-box" data-setbg="img/bck.jpg">
            <Container>
                <Row>
                    <Col lg="8">
                        <div className="main-section-text">
                            <h1>SUPERFOOD</h1>
                            <p>A personalized meal plan made just for you</p>
                            <p className="primary-btn" onClick={() => this.props.setPage("register")}>Register</p>
                            <p className="secondary-btn">Sign In</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
    }
  }
  
  export default Login;
  