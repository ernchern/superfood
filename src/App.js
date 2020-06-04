import React from 'react';
import './App.css';
import Login from './Login.js';
import Register from './Register.js';
import Main from './Main.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currPage: "main",
    };

    this.setPage = this.setPage.bind(this);
  }

  setPage(page) {
    this.setState({currPage: page});
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