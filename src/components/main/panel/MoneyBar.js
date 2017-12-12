import React, { Component } from "react";

import FlatButton from "material-ui/FlatButton";
import ContentAddCircle from "material-ui/svg-icons/content/add-circle";

const styles = {
  uploadButton: {
    verticalAlign: "middle",
    marginTop: 5,
    color: "#629460"
  }
};

class MoneyBar extends Component {
  state = {
    finished: false,
    stepIndex: 1
  };

  render() {
    return (
      <div>
        <div className="money-div">
          Sąskaita: <span className="money-span">500€</span>
        </div>
        <div className="money-div">
          Skola: <span className="money-span">-</span>
        </div>
        <FlatButton
          style={styles.uploadButton}
          className="money-button"
          label="papildyti sąskaitą"
          labelPosition="before"
          primary={true}
          icon={<ContentAddCircle />}
        />
      </div>
    );
  }
}

export default MoneyBar;
