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
      <div className="loader-cont">
        <div class="preloader-wrapper big active">
          <div class="spinner-layer spinner-teal lighten-2-only">
            <div class="circle-clipper left">
              <div class="circle" />
            </div>
            <div class="gap-patch">
              <div class="circle" />
            </div>
            <div class="circle-clipper right">
              <div class="circle" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
