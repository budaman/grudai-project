import React, { Component } from "react";

import RaisedButton from "material-ui/RaisedButton";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import Loading from "../main/panel/Loading";

injectTapEventPlugin();

const styles = {
  container: {
    textAlign: "center"
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
    if (this.state.selectedBank === "") {
      return false;
    }
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.props.isUserConnected();
    }, 1500);
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
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="loginContainer" style={styles.container}>
          <Dialog
            open={this.state.open}
            title="Pasirinkite norimą banką"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            {this.state.loading ? (
              <div className="loader-cont">
                <Loading />
              </div>
            ) : (
              <div className="banks-container">
                <div
                  style={
                    this.state.selectedBank === "seb"
                      ? { background: "#d2d2d2" }
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
                      ? { background: "#d2d2d2" }
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
                      ? { background: "#d2d2d2" }
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
      <img
        id="grudai-logo"
        className="pwc-logo"
        src="assets/grudai.png"
        alt="pwc-logo"
      />
      <h1>KG Klientų Sistema</h1>
      <RaisedButton
        label="prisijungti prie sistemos"
        secondary={true}
        onClick={props.handleTouchTap}
      />
    </div>
  );
};
