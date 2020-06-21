import React from 'react';
import './App.css';
import { Col, Row, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import firebase from 'firebase';

class SignIn extends React.Component {
    // componentDidMount() {
    //     firebase.database().ref("/").on("value", (snapshot) => {
    //         this.setState({users: snapshot.val().users});
    //       }, function (error) {
    //         console.log(error);
    //       });
    // }

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
                    <Col lg="2"></Col>
                    <Col lg="8">
                        <div className="register-text align-content-center">
                            <div className="section-title">
                                <h2 align='center'>Sign In</h2>
                            </div>
                            <form action="#" className="register-form">
                                <Row>
                                    <Col lg="12">
                                        <label>Email</label>
                                        <input autoComplete='off' name="email" type="email" onChange={(event) => this.props.setResponse("email", event.target.value)}/>
                                    </Col>
                                    <Col lg="12">
                                        <label>Password</label>
                                        <input type="password" onChange={(event) => this.props.setResponse("pw", event.target.value)}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="12" style={{height:"80px"}}>
										<p className="btn register-btn1" onClick={() => this.props.setPage("login")}>&#171; Back</p>
										<p className="btn register-btn1" style={{float: "right"}} onClick={() => this.props.login()}>Sign In &#187;</p>
									</Col>
                                </Row>
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

export default SignIn;