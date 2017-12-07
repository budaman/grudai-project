import React, { Component } from "react";

import RaisedButton from "material-ui/RaisedButton";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import CircularProgress from "material-ui/CircularProgress";

injectTapEventPlugin();

const styles = {
  container: {
    textAlign: "center",
    paddingTop: 200
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: "#bda26d"
  }
});

class Login extends Component {
  state = {
    open: false
  };

  handleRequestClose = () => {
    this.setState({
      open: false
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
      <FlatButton
        label="jungtis"
        primary={true}
        onTouchTap={this.handleRequestOk}
      />
    );
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <Dialog
            open={this.state.open}
            title="Pasirinkite norimą banką"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            {/* <CircularProgress size={80} thickness={5} /> */}
            <Banks />
          </Dialog>
          <Content handleTouchTap={this.handleTouchTap} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Login;

const Content = props => {
  return (
    <div className="login-container">
      <img className="pwc-logo" src="assets/grudai.png" alt="pwc-logo" />
      <h1>KG Klientu Sistema</h1>
      <RaisedButton
        label="prisijungti prie sistemos"
        secondary={true}
        onTouchTap={props.handleTouchTap}
      />
    </div>
  );
};

const Banks = props => {
  return (
    <div className="banks-container">
      <div className="banks">
        <img src="assets/seb.png" alt="seb logo" />
      </div>
      <div className="banks">
        <img src="assets/swed.png" alt="swed bank logo" />
      </div>
      <div className="banks">
        <img src="assets/dnb.png" alt="dNb bank logo" />
      </div>
    </div>
  );
};
