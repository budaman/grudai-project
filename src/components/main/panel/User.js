import React, { Component } from "react";
import ActionCreditCard from "material-ui/svg-icons/action/credit-card";
import ActionChromeReaderMode from "material-ui/svg-icons/action/chrome-reader-mode";
import DeviceDataUsage from "material-ui/svg-icons/device/data-usage";
import DeviceGraphicEq from "material-ui/svg-icons/device/graphic-eq";
import DeviceStorage from "material-ui/svg-icons/device/storage";
import ActionEuroSymbol from "material-ui/svg-icons/action/euro-symbol";
import AlertWarning from "material-ui/svg-icons/alert/warning";

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
              <div className="statistic-label">Kredito ir Debeto Istorija</div>
            </div>
            <div className="main-settings box-content-big">
              <div className="agenda-box">
                <div className="agenda-cont">
                  <div style={{ fontSize: 12, letterSpacing: 1 }}>kreditas</div>{" "}
                  <div style={{ color: "#78c383" }}>30 000.53€</div>
                </div>
                <div className="agenda-cont">
                  <div style={{ fontSize: 12, letterSpacing: 1 }}>debetas</div>{" "}
                  <div style={{ color: "#eec500" }}>12 521.21€</div>
                </div>
                <div className="agenda-cont">
                  <div className="agenda-cont">
                    <div style={{ fontSize: 12, letterSpacing: 1 }}>
                      laikotarpis
                    </div>{" "}
                    <div style={{ color: "#698eab" }}>3 metai</div>
                  </div>
                </div>
              </div>
              <div class="statistic-img-cont">
                <img
                  className="main-statistic-img"
                  src="assets/static/statistic.png"
                  alt="statistic"
                />
              </div>
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
              <div>Peržiūrėti Operacijų Istoriją</div>
            </div>
            <div className="main-settings documents-content-box">
              <div className="documents-img-container">
                <img
                  className="document-img"
                  src="assets/static/documents.png"
                  alt="statistic"
                />
              </div>
              <div className="alert-document-box">
                <AlertWarning />{" "}
                <span style={{ marginLeft: 5 }}>
                  yra nebaigtos 3 operacijos{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="boxes-display container-margin">
          <div className="container-small-box">
            <div className="main-settings box-header">
              <div className="box-header-icon">
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
              <div className="statistic-label">Pelno Augimas</div>
            </div>
            <div className="main-settings box-content-middle">
              <div className="diagram-container">
                <img src="assets/static/5.png" />
              </div>
            </div>
          </div>
          <div className="container-small-box">
            <div className="main-settings box-header">
              <div className="box-header-icon">
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
              <div className="statistic-label">Paslaugų Kiekis</div>
            </div>
            <div className="main-settings box-content-middle">
              <div className="diagram-container">
                <img src="assets/static/3.png" />
              </div>
            </div>
          </div>
          <div className="container-small-box">
            <div className="main-settings box-header">
              <div className="box-header-icon">
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
              <div className="statistic-label">Augalų Rūšys</div>
            </div>
            <div className="main-settings box-content-middle">
              <div className="diagram-container">
                <img src="assets/static/2.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-margin boxes-display">
          <div className="container-big-box">
            <div className="main-settings box-header">
              <div className="box-header-icon">
                <div className="statistic-icon-round">
                  <ActionEuroSymbol
                    style={{
                      width: 22,
                      height: 19
                    }}
                    color="white"
                  />
                </div>
              </div>
              <div className="statistic-label">Pardavimų Istorija</div>
            </div>
            <div className="main-settings box-content-big">
              {" "}
              <img
                className="main-statistic-img"
                src="assets/static/graph.png"
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
              <div>Peržiūrėti Operacijų Istoriją</div>
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

        <div className="margin-top">
          <hr />
        </div>
      </div>
    );
  }
}

export default User;
