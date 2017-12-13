import React, { Component } from "react";
import Steper from "./Steper";
import MoneyBar from "./MoneyBar";
import { List } from "material-ui/List";

class Header extends Component {
  render() {
    return (
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
    );
  }
}

export default Header;
