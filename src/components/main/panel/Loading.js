import React, { Component } from "react";
import CircularProgress from "material-ui/CircularProgress";

class Loading extends Component {
  state = {
    connected: false
  };

  isUserConnected = () => {
    this.setState({
      connected: !this.state.connected
    });
  };

  render() {
    return (
      <div className="progress">
        <CircularProgress size={100} thickness={10} color="#57b7ae" />
      </div>
    );
  }
}

export default Loading;
