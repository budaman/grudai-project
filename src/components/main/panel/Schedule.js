import React, { Component } from "react";

class Schedule extends Component {
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
        <div className="statistic-container">
          <div className="schedule-window">
            <img alt="schedule" src="assets/static/schedule.png" />
          </div>
        </div>
      </div>
    );
  }
}

export default Schedule;
