import React, { Component } from "react";
import ActionCreditCard from "material-ui/svg-icons/action/credit-card";
import ActionChromeReaderMode from "material-ui/svg-icons/action/chrome-reader-mode";
import DeviceDataUsage from "material-ui/svg-icons/device/data-usage";
import DeviceGraphicEq from "material-ui/svg-icons/device/graphic-eq";
import DeviceStorage from "material-ui/svg-icons/device/storage";

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
        <div className="static-cont container-margin">
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
            <div className="statistic-label">Kredito ir Debeto istorija</div>
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
            <img
              className="main-statistic-img"
              src="assets/static/statistic.png"
              alt="statistic"
            />
          </div>
          <div className="main-settings schedule-bar statistic-main-icon">
            <img
              className="document-img"
              src="assets/static/documents.png"
              alt="statistic"
            />
          </div>
        </div>
        <div className="diagram-header container-margin static-cont">
          <div className="diagram-bar main-settings">
            {" "}
            <div className="statistic-icon">
              <div className="statistic-icon-round">
                <DeviceDataUsage
                  style={{
                    width: 22,
                    height: 19
                  }}
                  color="white"
                />
              </div>
            </div>
            <div className="statistic-label">Sugalvoti pavadinima</div>
          </div>
          <div className="diagram-bar main-settings">
            {" "}
            <div className="statistic-icon">
              <div className="statistic-icon-round">
                <DeviceGraphicEq
                  style={{
                    width: 22,
                    height: 19
                  }}
                  color="white"
                />
              </div>
            </div>
            <div className="statistic-label">Sugalvoti pavadinima</div>
          </div>
          <div className="diagram-bar main-settings">
            {" "}
            <div className="statistic-icon">
              <div className="statistic-icon-round">
                <DeviceStorage
                  style={{
                    width: 22,
                    height: 19
                  }}
                  color="white"
                />
              </div>
            </div>
            <div className="statistic-label">Sugalvoti pavadinima</div>
          </div>
        </div>
        <div className="diagram-header static-cont">
          <div className="diagram-container main-settings">
            <img src="assets/static/5.png" />
          </div>
          <div className="diagram-container main-settings">
            <img src="assets/static/3.png" />{" "}
          </div>
          <div className="diagram-container main-settings">
            <img src="assets/static/2.png" />{" "}
          </div>
        </div>
        <div className="container-margin boxes-display">
          <div className="container-big-box">
            <div className="main-settings box-header">
              <div className="box-header-icon">
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
              <div className="statistic-label">Kredito ir Debeto istorija</div>
            </div>
            <div className="main-settings box-content-big">
              {" "}
              <img
                className="main-statistic-img"
                src="assets/static/statistic.png"
                alt="statistic"
              />
            </div>
          </div>
          <div className="container-small-box">
            <div className="main-settings box-header">
              <div className="box-header-icon">
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
              <div>Peržiūrėti operacijų istoriją</div>
            </div>
            <div className="main-settings box-content-big">
              <img
                className="document-img"
                src="assets/static/documents.png"
                alt="statistic"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
