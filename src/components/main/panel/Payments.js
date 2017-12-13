import React, { Component } from "react";

class Payments extends Component {
  render() {
    return (
      <div className="statistic-container">
        <div className="stats-window-big">
          <h5>Užsakymų istorija</h5>
          <div className="stats-cont">
            <div className="diagram-cont-payment">
              <img src="assets/static/history.png" alt="static pic" />
            </div>
            <div className="payments-cont">
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Duis sit amet velit sit amet elit dignissim.</li>
                <li>Suspendisse vulputate, nisi quis imperdiet.</li>
                <li>Phasellus aliquet elit sit amet nulla scelerisque.</li>
                <li>Nullam quis elit non lorem viverra semper.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Payments;
