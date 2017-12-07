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
    open: false,
    selectedBank: "",
    loading: false
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  handleRequestOk = () => {
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.props.isUserConnected();
    }, 1000);
  };

  handleTouchTap = () => {
    this.setState({
      open: true
    });
  };

  selectBank = val => {
    this.setState({
      selectedBank: val
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
    console.log(this.state.loading);
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <Dialog
            open={this.state.open}
            title="Pasirinkite norimą banką"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            {this.state.loading ? (
              <CircularProgress size={80} thickness={5} />
            ) : (
              <div className="banks-container">
                <div
                  style={
                    this.state.selectedBank === "seb"
                      ? { background: "#A5A5A5" }
                      : null
                  }
                  className="banks"
                  onClick={() => {
                    this.selectBank("seb");
                  }}
                >
                  <img src="assets/seb.png" alt="seb logo" />
                </div>
                <div
                  style={
                    this.state.selectedBank === "swed"
                      ? { background: "#A5A5A5" }
                      : null
                  }
                  className="banks"
                  onClick={() => {
                    this.selectBank("swed");
                  }}
                >
                  <img src="assets/swed.png" alt="swed bank logo" />
                </div>
                <div
                  style={
                    this.state.selectedBank === "dnb"
                      ? { background: "#A5A5A5" }
                      : null
                  }
                  className="banks"
                  onClick={() => {
                    this.selectBank("dnb");
                  }}
                >
                  <img src="assets/dnb.png" alt="dNb bank logo" />
                </div>
              </div>
            )}
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
