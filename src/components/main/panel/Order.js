import React, { Component } from "react";

import DeviceDataUsage from "material-ui/svg-icons/device/data-usage";
import DeviceGraphicEq from "material-ui/svg-icons/device/graphic-eq";
import DeviceStorage from "material-ui/svg-icons/device/storage";

export default class Order extends Component {
  render() {
    return (
      <div className="user-panel">
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
              <div className="statistic-label">Pesticidai</div>
            </div>
            <div className="main-settings box-content-middle">
              <div className="diagram-container">
                <img alt="pesticidai" src="assets/static/pest.png" />
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
              <div className="statistic-label">Trašos</div>
            </div>
            <div className="main-settings box-content-middle">
              <div className="diagram-container">
                <img alt="fertilizers" src="assets/static/fertilizers.png" />
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
              <div className="statistic-label">Kenkėjų naikinimas</div>
            </div>
            <div className="main-settings box-content-middle">
              <div className="diagram-container">
                <img alt="diagram-2" src="assets/static/bugs.png" />
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
              <div className="statistic-label">Logistika</div>
            </div>
            <div className="main-settings box-content-middle">
              <div className="diagram-container">
                <img alt="diagram" src="assets/static/logistic.png" />
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
              <div className="statistic-label">Įrangos nuoma</div>
            </div>
            <div className="main-settings box-content-middle">
              <div className="diagram-container">
                <img alt="diagram-3" src="assets/static/rent.png" />
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
              <div className="statistic-label">Sandėliavimas</div>
            </div>
            <div className="main-settings box-content-middle">
              <div className="diagram-container">
                <img alt="diagram-2" src="assets/static/warehouse.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
