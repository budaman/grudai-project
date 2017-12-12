import React, { Component } from "react";

import FlatButton from "material-ui/FlatButton";
import ContentAddCircle from "material-ui/svg-icons/content/add-circle";
import Divider from "material-ui/Divider";
import Subheader from "material-ui/Subheader";
import { List, ListItem } from "material-ui/List";

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
        <List className="money-cont">
          <ListItem
            primaryText={
              <div className="money-div">
                Sąskaita: <span className="money-span">500€</span>
              </div>
            }
          />
          <ListItem
            primaryText={
              <div className="money-div">
                Skola: <span className="money-span">-</span>
              </div>
            }
          />
          <Divider inset={true} />
          <FlatButton
            style={styles.uploadButton}
            className="money-button"
            label="papildyti sąskaitą"
            labelPosition="before"
            primary={true}
            icon={<ContentAddCircle />}
          />
        </List>
      </div>
    );
  }
}

export default MoneyBar;
