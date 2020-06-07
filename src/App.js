import React from 'react';
import './App.css';
import Login from './Login.js';
import Register from './Register.js';
import Main from './Main.js';
import SignIn from './SignIn.js';
import firebase from 'firebase';
import config from './config.js';
import ReactEncrypt from 'react-encrypt';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currPage: "login",
    };

    this.setPage = this.setPage.bind(this);
    this.setSignInInfo = this.setSignInInfo.bind(this);
    this.login = this.login.bind(this);
    this.setLoggedUserNull = this.setLoggedUserNull.bind(this);
  }

  componentDidMount() {
    firebase.initializeApp(config);
    var recipes;
    firebase.database().ref("/").on("value", (snapshot) => {
      this.setState({recipes: snapshot.val().recipes, users: snapshot.val().users});
    }, function (error) {
      console.log(error);
    });
   
  }

  setLoggedUserNull() {
    this.setState({loggedUser: null});
  }

  login() {
    let user, key, logged;
    for (key in this.state.users) {
      user = this.state.users[key];
      if (user.pw === this.state.signInPw && user.email === this.state.signInEmail) {
        this.setState({loggedUser: user});
        logged = true;
        this.setPage("main");
      }
    }

    if (!logged) {
      alert("This user is not registered.");
    }

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
        content = <Register loggedUser={this.state.loggedUser} setPage={this.setPage} logged/>;
        break;
      case "signIn":
        content = <ReactEncrypt
				encryptKey={"ewfWE@#%$rfdsefgdsf"}
				>
				<SignIn user={this.state.currUser} login={this.login} setPage={this.setPage} setResponse={this.setSignInInfo}/>
				</ReactEncrypt>;
        break;
      case "main":
        content = <Main user={this.state.loggedUser} recipes={this.state.recipes} 
          setPage={this.setPage} setLoggedUserNull={this.setLoggedUserNull}/>;
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