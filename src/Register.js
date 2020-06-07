import React from 'react';
import './App.css';
import PersonalRegister from './PersonalRegister';
import AllergyRegister from './AllergyRegister';
import DiseaseRegister from './DiseaseRegister.js';
import ReactEncrypt from 'react-encrypt';
import firebase from 'firebase';

class Register extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          currId: 0,
          states: ["personal", "allergy", "diseases"],
          responses: (this.props.loggedUser == null)? {} : this.props.loggedUser,
      }

      this.setResponse = this.setResponse.bind(this);
      this.nextStage = this.nextStage.bind(this);
      this.goToId = this.goToId.bind(this);
	  this.goBack = this.goBack.bind(this);
    }

    setResponse(id, value) {
        var tmp = this.state.responses;
        tmp[id] = value;
        this.setState({responses: tmp});
    }

    nextStage() {
        var page = this.state.states[this.state.currId];
        var responses = this.state.responses;
        if (page === "personal") {
			if ("name" in responses && "lastName" in responses && "email" in responses && "pw" in responses && "country" in responses) {
                this.setState({currId: this.state.currId + 1});
            } else {
                alert("Please fill all required fields.");
            }
		} else if (page === "diseases") {
            if ("hypertension" in responses && "diabetes" in responses) {
                console.log(responses);
                firebase.database().ref("/users/" + responses.email).set(responses).catch(error => console.log(error)).then(() => this.props.setPage('login'));
            } else {
                alert("Please indicate if you have any health restriction.");
            }
        } else if (page === "allergy") {
            if ("nopeanut" in responses && "nomilk" in responses) {
                this.setState({currId: this.state.currId + 1});
            } else {
                alert("Please indicate if you have any food allergies.");
            }
            
        }
    }

    goToId(id) {
		if (id <= this.state.currId) {
            this.setState({currId: id});
        } else {
            alert("Please click next after filling all required fields.");
        }
        
    }
	
	goBack() {
        this.setState({responses: {}});
        if (this.props.loggedUser != null) {
            this.props.setPage('main');
        } else {
            this.props.setPage('login');
        }
		
	}
  
    render() {  
        var page = this.state.states[this.state.currId];
        let content;
        switch (page) {
            case "personal":
                content = 
				<ReactEncrypt
				encryptKey={"ewfWE@#%$rfdsefgdsf"}
				>
					<PersonalRegister setResponse={this.setResponse} nextStage={this.nextStage} goToId={this.goToId} goBack={this.goBack} 
					responseData={this.state.responses} loggedUser={this.props.loggedUser}/>
				</ReactEncrypt>
                break;
            case "allergy":
                content = <AllergyRegister setResponse={this.setResponse} nextStage={this.nextStage} goToId={this.goToId} goBack={this.goBack}/>
                break;
            case "diseases":
                content = <DiseaseRegister setResponse={this.setResponse} nextStage={this.nextStage} goToId={this.goToId}/>
                break;
        }

      return (
        <div>
            {content}
        </div>
      )
    }
  }
  
export default Register;