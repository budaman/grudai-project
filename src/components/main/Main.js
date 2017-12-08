import React, { Component } from "react";
import Sidebar from "./sidebar/Sidebar";

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <Sidebar />
      </div>
    );
  }
}

export default Main;
