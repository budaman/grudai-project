import React, { Component } from "react";
import ActionCreditCard from "material-ui/svg-icons/action/credit-card";
import ActionAccountBalanceWallet from "material-ui/svg-icons/action/account-balance-wallet";
import ActionAssignmentLate from "material-ui/svg-icons/action/assignment-late";

class Header extends Component {
  render() {
    return (
      <div className="top-header ">
        <div className="header-content main-settings">
          <div className="header-icon">
            <div
              className="header-icon-round"
              style={{ backgroundColor: "#5dc089" }}
            >
              <ActionCreditCard color="white" />
            </div>
          </div>
          <div className="header-credit">
            <span className="header-name">Kreditas</span>
            <span style={{ color: "#5dc089" }} className="credit-money">
              153.53€
            </span>
          </div>
        </div>
        <div className="header-content main-settings">
          <div className="header-icon">
            <div
              className="header-icon-round"
              style={{ backgroundColor: "#e05f51" }}
            >
              <ActionAccountBalanceWallet color="white" />
            </div>
          </div>
          <div className="header-credit">
            <span className="header-name">Debetas</span>
            <span style={{ color: "#e05f51" }} className="credit-money">
              23.46€
            </span>
          </div>
        </div>
        <div className="header-content main-settings">
          <div className="header-icon">
            <div
              className="header-icon-round"
              style={{ backgroundColor: "#668da8" }}
            >
              <ActionAssignmentLate color="white" />
            </div>
          </div>
          <div className="header-credit">
            <span className="header-name">Neapmokėtos sąskaitos</span>
            <span style={{ color: "#668da8" }} className="credit-money">
              2
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
