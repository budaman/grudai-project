import React, { Component } from "react";

class MoneyBar extends Component {
  state = {
    finished: false,
    stepIndex: 1
  };

  render() {
    return (
      <div>
        <div className="money-div">
          Pinigai: <span className="money-span">500eur</span>
        </div>
        <div className="money-div">
          Skola: <span className="money-span">nėra</span>
        </div>
      </div>
    );
  }
}

export default MoneyBar;
