import React, { Component } from "react";
import "./App.css";
import Login from "./components/login/Login";
import Main from "./components/main/Main";

class App extends Component {
  state = {
    connected: false
  };

  isUserConnected = () => {
    this.setState({
      connected: !this.state.connected
    });
  };

  render() {
    return (
      // <div className="App">
      //   {this.state.connected ? null : (
      //     <Login
      //       isUserConnected={this.isUserConnected}
      //       connected={this.state.connected}
      //     />
      //   )}
      //   {this.state.connected ? <Main /> : null}
      // </div>
      <Main />
    );
  }
}

export default App;
