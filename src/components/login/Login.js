import React, { Component } from "react";

import RaisedButton from "material-ui/RaisedButton";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import CircularProgress from "material-ui/CircularProgress";
import { deepOrange500 } from "material-ui/styles/colors";
import Popover from "material-ui/Popover";

injectTapEventPlugin();

const styles = {
  container: {
    textAlign: "center",
    paddingTop: 200
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

class Login extends Component {
  state = {
    open: false,
    openHelp: false
  };

  handlePopUp = event => {
    event.preventDefault();

    this.setState({
      openHelp: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
      openHelp: false
    });
  };

  handleRequestOk = () => {
    this.props.isUserConnected();
    this.setState({
      open: false
    });
  };

  handleTouchTap = () => {
    this.setState({
      open: true
    });
  };

  render() {
    const standardActions = (
      <FlatButton label="Ok" primary={true} onTouchTap={this.handleRequestOk} />
    );
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <Dialog
            open={this.state.open}
            title="Meging with your gmail account"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            <CircularProgress size={80} thickness={5} />
          </Dialog>
          <Content handleTouchTap={this.handleTouchTap} />
          <button onClick={this.handlePopUp}>Help</button>
          <Popover
            open={this.state.openHelp}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
            targetOrigin={{ horizontal: "left", vertical: "top" }}
            onRequestClose={this.handleRequestClose}
          >
            <h6>Satalia support contacts</h6>
            <h6>PwC support conttacts</h6>
          </Popover>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Login;

const Content = props => {
  return (
    <div className="login-container">
      <img className="pwc-logo" src="assets/pwc.png" alt="pwc-logo" />
      <h1>PwC-juggler:</h1>
      <RaisedButton
        label="logging with gmail account"
        secondary={true}
        onTouchTap={props.handleTouchTap}
      />
    </div>
  );
};
