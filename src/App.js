import React from 'react';
import './App.css';
import Login from './Login.js';
import Register from './Register.js';
import Main from './Main.js';
import SignIn from './SignIn.js';
import firebase from 'firebase';
import config from './config.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currPage: "login",
    };

    this.setPage = this.setPage.bind(this);
    this.setSignInInfo = this.setSignInInfo.bind(this);
  }

  componentDidMount() {
    firebase.initializeApp(config);
    firebase.database().ref("/").on("value", function (snapshot) {
      console.log(snapshot.val());
    }, function (error) {
      console.log(error);
    });
  }

  setPage(page) {
    this.setState({currPage: page});
  }

  setSignInInfo(id, value) {
    if (id === "email") {
      this.setState({signInEmail: value});
    } else {
      this.setState({signInPw: value});
    }
  }

  render() {
    let content;
    switch(this.state.currPage) {
      case "login":
        content = <Login setPage={this.setPage}/>;
        break;
      case "register":
        content = <Register setPage={this.setPage}/>;
        break;
      case "signIn":
        content = <SignIn setPage={this.setPage} setResponse={this.setSignInInfo}/>;
        break;
      case "main":
        content = <Main/>;
        break;
      default:
        content = <h1>Error</h1>;
    }

    return (
      <div className="div-bg">
        {content}
      </div>
    )
  }

}

export default App;