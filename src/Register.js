import React from 'react';
import './App.css';
import PersonalRegister from './PersonalRegister';
import AllergyRegister from './AllergyRegister';

class Register extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          currId: 0,
          states: ["personal", "allergy", "diseases"],
          responses: {},
      }

      this.setResponse = this.setResponse.bind(this);
      this.nextStage = this.nextStage.bind(this);
      this.goToId = this.goToId.bind(this);
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
            if ("name" in responses && "lastName" in responses && "email" in responses && "mobile" in responses && "country" in responses) {
                this.setState({currId: this.state.currId + 1});
            } else {
                alert("Error");
            }
        } else {
            alert("Not yet");
        }
    }

    goToId(id) {
        if (id <= this.state.currId) {
            this.setState({currId: id});
        } else {
            alert("Error");
        }
        
    }
  
    render() {  
        var page = this.state.states[this.state.currId];
        let content;
        switch (page) {
            case "personal":
                content = <PersonalRegister setResponse={this.setResponse} nextStage={this.nextStage} goToId={this.goToId}/>;
                break;
            case "allergy":
                content = <AllergyRegister setResponse={this.setResponse} nextStage={this.nextStage} goToId={this.goToId}/>
                break;
            default:
                content = "Error";
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