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
    return (
      <div className="user-panel">
        <div className="top-header">
          <div className="status-bar">status bar</div>
          <div className="money-section">money</div>
        </div>
        <div className="statistic-container">
          <div className="stats-window">1</div>
          <div className="stats-window">1</div>
          <div className="stats-window">1</div>
          <div className="stats-window">1</div>
          <div className="stats-window">1</div>
          <div className="stats-window">1</div>
          <div className="stats-window">1</div>
          <div className="stats-window">1</div>
          <div className="stats-window">1</div>
          <div className="stats-window">1</div>
          <div className="stats-window">1</div>
          <div className="stats-window">1</div>
          <div className="stats-window">1</div>
          <div className="stats-window">1</div>
        </div>
      </div>
    );
  }
}

export default User;
