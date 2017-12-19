import React, { Component } from "react";
import ActionChromeReaderMode from "material-ui/svg-icons/action/chrome-reader-mode";
import DeviceDataUsage from "material-ui/svg-icons/device/data-usage";
import DeviceGraphicEq from "material-ui/svg-icons/device/graphic-eq";
import DeviceStorage from "material-ui/svg-icons/device/storage";
import ActionEuroSymbol from "material-ui/svg-icons/action/euro-symbol";
import AlertWarning from "material-ui/svg-icons/alert/warning";
import ActionDone from "material-ui/svg-icons/action/done";
import ActionUpdate from "material-ui/svg-icons/action/update";
import MyFirstChart from "../d3/MyFirstChart";
import QualityChart from "../d3/QualityChart";
import PlantType from "../d3/PlantType";

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
              <div className="statistic-img-cont">
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
              <div>Paskutiniai pristatymai</div>
            </div>
            <div className="main-settings last-operations">
              <div className="last-operations-content darker">
                <div className="status-date">2017-12-11</div>
                <div className="status-type">Rugiai</div>
                <div className="status-icon">
                  <ActionUpdate color="#698eab" />
                  <span className="status-bar-label">grudų svėrimas</span>
                </div>
              </div>
              <div className="last-operations-content ">
                <div className="status-date">2017-12-05</div>
                <div className="status-type">Rugiai</div>
                <div className="status-icon">
                  <ActionUpdate color="#698eab" />
                  <span className="status-bar-label">grūdų tikrinimas</span>
                </div>
              </div>
              <div className="last-operations-content darker">
                <div className="status-date">2017-08-20</div>
                <div className="status-type">Mišrus</div>
                <div className="status-icon">
                  <ActionDone color="#66c188" />
                  <span className="status-bar-finished">baigta</span>
                </div>
              </div>
              <div className="last-operations-content">
                <div className="status-date">2017-07-16</div>
                <div className="status-type">Kviečiai</div>
                <div className="status-icon">
                  <ActionDone color="#66c188" />
                  <span className="status-bar-finished">baigta</span>
                </div>
              </div>
              <div className="last-operations-content darker">
                <div className="status-date">2017-05-04</div>
                <div className="status-type">Rugiai</div>
                <div className="status-icon">
                  <ActionDone color="#66c188" />
                  <span className="status-bar-finished">baigta</span>
                </div>
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
              <div className="statistic-label">Kokybės Rodikliai</div>
            </div>
            <div className="main-settings box-content-middle">
              <div className="diagram-container">
                <QualityChart data={[25, 53, 22]} />

                <div className="agenda">
                  <div className="agenda-elem">
                    <span style={{ backgroundColor: "#60b8b0" }} />
                    <div>Gera</div>
                  </div>
                  <div className="agenda-elem">
                    <span style={{ backgroundColor: "#4ecae0" }} />
                    <div>Vidutinė</div>
                  </div>
                  <div className="agenda-elem">
                    <span style={{ backgroundColor: "#f96d2a" }} />
                    <div>Prasta</div>
                  </div>
                </div>
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
                <img alt="diagram-3" src="assets/static/3.png" />
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
                <PlantType data={[57, 25, 18]} />
                <div className="agenda">
                  <div className="agenda-elem">
                    <span style={{ backgroundColor: "#57b7ae" }} />
                    <div> Rūgiai</div>
                  </div>
                  <div className="agenda-elem">
                    <span style={{ backgroundColor: "#3ec8dd" }} />
                    <div> Kviečiai</div>
                  </div>
                  <div className="agenda-elem">
                    <span style={{ backgroundColor: "#5ac5fa" }} />
                    <div> Avižos</div>
                  </div>
                </div>
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
              <MyFirstChart data={[10, 20, 80, 30, 40]} />
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
                <AlertWarning style={{ color: "#fdd87b" }} />{" "}
                <span style={{ marginLeft: 5 }}>
                  yra nebaigtos{" "}
                  <span style={{ color: "#698eab" }}>3 operacijos</span>{" "}
                </span>
              </div>
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
