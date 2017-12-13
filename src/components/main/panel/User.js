import React, { Component } from "react";

class User extends Component {
  state = {
    connected: false
  };

  isUserConnected = () => {
    this.setState({
      connected: !this.state.connected
    });
  };

  render() {
    return <div className="user-panel">aaaaaaaa</div>;
  }
}

export default User;
