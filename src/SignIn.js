import React from 'react';
import './App.css';
import { Col, Row, Container } from 'react-bootstrap';

class SignIn extends React.Component {
    render() {
        return (
        <section className="register-section container-box">
            <Container>
                <Row>
                    <Col lg="8">
                        <div className="register-text align-content-center">
                            <div className="section-title">
                                <h2 align='center'>Sign In</h2>
                            </div>
                            <form action="#" className="register-form">
                                <Row>
                                    <Col lg="12">
                                        <label>Email</label>
                                        <input type="text" onChange={(event) => this.props.setResponse("email", event.target.value)}/>
                                    </Col>
                                    <Col lg="12">
                                        <label>Password</label>
                                        <input type="password" onChange={(event) => this.props.setResponse("pw", event.target.value)}/>
                                    </Col>
                                </Row>
                                <p className="btn register-btn" onClick={() => this.props.setPage("main")}>Sign In</p>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        );
    }
}

export default SignIn;