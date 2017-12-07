import React, { Component } from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: "#bda26d"
  }
});

class Main extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Drawer width={200}>
            <AppBar title="AppBar" />
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
