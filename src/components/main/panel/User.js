import React, { Component } from "react";
import Steper from "./Steper";
import MoneyBar from "./MoneyBar";

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
          <div className="status-bar">
            <Steper />
          </div>
          <div className="money-section">
            <MoneyBar />
          </div>
        </div>
        <div className="statistic-container">
          <div className="stats-window-big">
            <h5>Grūdų kokybė</h5>
            <div className="stats-cont">
              <img
                className="statistic-img"
                src="assets/static/1.png"
                alt="static pic"
              />
              <div>
                <ol>
                  <li>Lorem</li>
                  <li>ipsum</li>
                  <li>dolor</li>
                  <li>sit</li>
                  <li>amet</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="stats-window" />
          <div className="stats-window" />
          <div className="stats-window" />
          <div className="stats-window" />
          <div className="stats-window" />
          <div className="stats-window" />
          <div className="stats-window" />
          <div className="stats-window" />
          <div className="stats-window" />
          <div className="stats-window" />
          <div className="stats-window" />
          <div className="stats-window" />
          <div className="stats-window" />
        </div>
      </div>
    );
  }
}

export default User;
