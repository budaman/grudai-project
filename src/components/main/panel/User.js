import React, { Component } from "react";
import FlatButton from "material-ui/FlatButton";

class User extends Component {
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
      <div>
        <div>
          <FlatButton label="Default" />
          <FlatButton label="Primary" primary={true} />
          <FlatButton label="Secondary" secondary={true} />
          <FlatButton label="Disabled" disabled={true} />
          <br />
          <br />
          <FlatButton label="Full width" fullWidth={true} />
        </div>
      </div>
    );
  }
}

export default User;
