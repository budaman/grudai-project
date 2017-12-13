import React, { Component } from "react";
import Steper from "./Steper";
import MoneyBar from "./MoneyBar";
import { List, ListItem } from "material-ui/List";
import Divider from "material-ui/Divider";

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
          <div className="logo-header">
            <img src="assets/grudai.png" alt="grudai" />
          </div>
          <div className="status-bar">
            <List className="money-cont">
              <Steper />
            </List>
          </div>
          <div className="money-section">
            <MoneyBar />
          </div>
        </div>

        <div className="statistic-container">
          <div className="stats-window-big">
            <h5>Lorem ipsum</h5>
            <div className="stats-cont">
              <div className="diagram-cont">
                <img
                  className="statistic-img"
                  src="assets/static/1.png"
                  alt="static pic"
                />
              </div>
              <div className="list-container">
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
          <div className="stats-window-big">
            <h5>Lorem ipsum</h5>
            <div className="stats-cont">
              <div className="diagram-cont">
                <img
                  className="statistic-img"
                  src="assets/static/2.png"
                  alt="static pic"
                />
              </div>
              <div className="list-container">
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
          <div className="stats-window-big">
            <h5>Grūdų kokybė</h5>
            <div className="stats-cont">
              <div className="diagram-cont">
                <img
                  className="statistic-img"
                  src="assets/static/3.png"
                  alt="static pic"
                />
              </div>
              <div className="list-container">
                <ol>
                  <li>Lorem</li>
                  <li>ipsum</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="stats-window-big">
            <h5>Grūdų kokybė</h5>
            <div className="stats-cont">
              <div className="diagram-cont">
                <img
                  className="statistic-img"
                  src="assets/static/4.png"
                  alt="static pic"
                />
              </div>
              <div className="list-container">
                <ol>
                  <li>Lorem</li>
                  <li>ipsum</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="stats-window-big">
            <h5>Grūdų kokybė</h5>
            <div className="stats-cont">
              <div className="diagram-cont">
                <img
                  className="statistic-img"
                  src="assets/static/5.png"
                  alt="static pic"
                />
              </div>
              <div className="list-container">
                <ol>
                  <li>Lorem</li>
                  <li>ipsum</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="stats-window-big">
            <h5>Grūdų kokybė</h5>
            <div className="stats-cont">
              <div className="diagram-cont">
                <img
                  className="statistic-img"
                  src="assets/static/6.png"
                  alt="static pic"
                />
              </div>
              <div className="list-container">
                <ol>
                  <li>Lorem</li>
                  <li>ipsum</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="stats-window-big">
            <h5>Grūdų kokybė</h5>
            <div className="stats-cont">
              <div className="diagram-cont">
                <img
                  className="statistic-img"
                  src="assets/static/7.png"
                  alt="static pic"
                />
              </div>
              <div className="list-container">
                <ol>
                  <li>Lorem</li>
                  <li>ipsum</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="stats-window-big">
            <h5>Grūdų kokybė</h5>
            <div className="stats-cont">
              <div className="diagram-cont">
                <img
                  className="statistic-img"
                  src="assets/static/8.png"
                  alt="static pic"
                />
              </div>
              <div className="list-container">
                <ol>
                  <li>Lorem</li>
                  <li>ipsum</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="stats-window-big">
            <h5>Grūdų kokybė</h5>
            <div className="stats-cont">
              <div className="diagram-cont">
                <img
                  className="statistic-img"
                  src="assets/static/10.png"
                  alt="static pic"
                />
              </div>
              <div className="list-container">
                <ol>
                  <li>Lorem</li>
                  <li>ipsum</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="stats-window-big">
            <h5>Grūdų kokybė</h5>
            <div className="stats-cont">
              <div className="diagram-cont">
                <img
                  className="statistic-img"
                  src="assets/static/11.png"
                  alt="static pic"
                />
              </div>
              <div className="list-container">
                <ol>
                  <li>Lorem</li>
                  <li>ipsum</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="stats-window-big">
            <h5>Grūdų kokybė</h5>
            <div className="stats-cont">
              <div className="diagram-cont">
                <img
                  className="statistic-img"
                  src="assets/static/12.png"
                  alt="static pic"
                />
              </div>
              <div className="list-container">
                <ol>
                  <li>Lorem</li>
                  <li>ipsum</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="stats-window-big">
            <h5>Grūdų kokybė</h5>
            <div className="stats-cont">
              <div className="diagram-cont">
                <img
                  className="statistic-img"
                  src="assets/static/13.png"
                  alt="static pic"
                />
              </div>
              <div className="list-container">
                <ol>
                  <li>Lorem</li>
                  <li>ipsum</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="stats-window-big">
            <h5>Grūdų kokybė</h5>
            <div className="stats-cont">
              <div className="diagram-cont">
                <img
                  className="statistic-img"
                  src="assets/static/14.png"
                  alt="static pic"
                />
              </div>
              <div className="list-container">
                <ol>
                  <li>Lorem</li>
                  <li>ipsum</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="stats-window-big">
            <h5>Grūdų kokybė</h5>
            <div className="stats-cont">
              <div className="diagram-cont">
                <img
                  className="statistic-img"
                  src="assets/static/15.png"
                  alt="static pic"
                />
              </div>
              <div className="list-container">
                <ol>
                  <li>Lorem</li>
                  <li>ipsum</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="stats-window-big">
            <h5>Grūdų kokybė</h5>
            <div className="stats-cont">
              <div className="diagram-cont">
                <img
                  className="statistic-img"
                  src="assets/static/16.png"
                  alt="static pic"
                />
              </div>
              <div className="list-container">
                <ol>
                  <li>Lorem</li>
                  <li>ipsum</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="stats-window-big">
            <h5>Grūdų kokybė</h5>
            <div className="stats-cont">
              <div className="diagram-cont">
                <img
                  className="statistic-img"
                  src="assets/static/17.png"
                  alt="static pic"
                />
              </div>
              <div className="list-container">
                <ol>
                  <li>Lorem</li>
                  <li>ipsum</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="stats-window-big">
            <h5>Grūdų kokybė</h5>
            <div className="stats-cont">
              <div className="diagram-cont">
                <img
                  className="statistic-img"
                  src="assets/static/18.png"
                  alt="static pic"
                />
              </div>
              <div className="list-container">
                <ol>
                  <li>Lorem</li>
                  <li>ipsum</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="stats-window-big">
            <h5>Grūdų kokybė</h5>
            <div className="stats-cont">
              <div className="diagram-cont">
                <img
                  className="statistic-img"
                  src="assets/static/19.png"
                  alt="static pic"
                />
              </div>
              <div className="list-container">
                <ol>
                  <li>Lorem</li>
                  <li>ipsum</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="stats-window-big">
            <h5>Grūdų kokybė</h5>
            <div className="stats-cont">
              <div className="diagram-cont">
                <img
                  className="statistic-img"
                  src="assets/static/20.png"
                  alt="static pic"
                />
              </div>
              <div className="list-container">
                <ol>
                  <li>Lorem</li>
                  <li>ipsum</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="stats-window-big">
            <h5>Grūdų kokybė</h5>
            <div className="stats-cont">
              <div className="diagram-cont">
                <img
                  className="statistic-img"
                  src="assets/static/21.png"
                  alt="static pic"
                />
              </div>
              <div className="list-container">
                <ol>
                  <li>Lorem</li>
                  <li>ipsum</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="stats-window-big">
            <h5>Grūdų kokybė</h5>
            <div className="stats-cont">
              <div className="diagram-cont">
                <img
                  className="statistic-img"
                  src="assets/static/22.png"
                  alt="static pic"
                />
              </div>
              <div className="list-container">
                <ol>
                  <li>Lorem</li>
                  <li>ipsum</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
