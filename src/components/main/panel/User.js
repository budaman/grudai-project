import React, { Component } from "react";
import ActionCreditCard from "material-ui/svg-icons/action/credit-card";
import ActionChromeReaderMode from "material-ui/svg-icons/action/chrome-reader-mode";

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
        <div className="static-cont">
          <div className="main-settings static-bar">
            <div className="statistic-icon">
              <div className="statistic-icon-round">
                <ActionChromeReaderMode
                  style={{
                    width: 22,
                    height: 19
                  }}
                  color="white"
                />
              </div>
            </div>
            <div className="statistic-label">Kredito ir Debito istorija</div>
          </div>
          <div className="main-settings schedule-bar static-bar-header">
            <div className="statistic-icon">
              <div className="statistic-icon-round">
                <ActionChromeReaderMode
                  style={{
                    width: 22,
                    height: 19
                  }}
                  color="white"
                />
              </div>
            </div>
            <div className="statistic-label">Peržiūrėti operacijų istoriją</div>
          </div>
        </div>
        <div className="static-cont main-statistic">
          <div className="main-settings static-bar statistic-main-icon ">
            <img src="assets/static/statistic.png" alt="statistic" />
          </div>
          <div className="main-settings schedule-bar">1</div>
        </div>
      </div>
    );
  }
}

export default User;
