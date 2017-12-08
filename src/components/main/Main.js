import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import Subheader from "material-ui/Subheader";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import classnames from "classnames";

import ActionAccountCircle from "material-ui/svg-icons/action/account-circle";
import ActionDateRange from "material-ui/svg-icons/action/date-range";
import ActionUpdate from "material-ui/svg-icons/action/update";
import AvLibraryBooks from "material-ui/svg-icons/av/library-books";
import PlacesAirportShuttle from "material-ui/svg-icons/places/airport-shuttle";
import ImageRemoveRedEye from "material-ui/svg-icons/image/remove-red-eye";
import ImageFilterFrames from "material-ui/svg-icons/image/filter-frames";
import HardwareDeveloperBoard from "material-ui/svg-icons/hardware/developer-board";
import SocialNotifications from "material-ui/svg-icons/social/notifications";

class Main extends Component {
  state = {
    open: true
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    this.setState({ open: true });
  };

  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <div>
            <AppBar
              className={classnames("app-bar", { expanded: this.state.open })}
              onLeftIconButtonClick={this.handleToggle}
              title="Kliento skydelis"
              iconElementRight={
                <ListItem
                  primaryText="Pranešimai"
                  rightIcon={<SocialNotifications />}
                />
              }
            />
            <Drawer
              docked={true}
              open={this.state.open}
              onRequestChange={open => this.setState({ open })}
            >
              <List>
                <Subheader>Menu</Subheader>
                <ListItem
                  primaryText="Kliento skydelis"
                  leftIcon={<ActionAccountCircle />}
                />
                <ListItem
                  primaryText="Grafikai"
                  leftIcon={<ActionDateRange />}
                />
                <ListItem
                  primaryText="Valdymas"
                  leftIcon={<ContentInbox />}
                  initiallyOpen={true}
                  primaryTogglesNestedList={true}
                  nestedItems={[
                    <ListItem
                      key={1}
                      primaryText="Keisti kalanedorių"
                      leftIcon={<ActionUpdate />}
                    />,
                    <ListItem
                      key={2}
                      primaryText="Dokumentai"
                      leftIcon={<AvLibraryBooks />}
                      disabled={true}
                      nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Peržiurėti esamus dokumentus"
                          leftIcon={<ImageRemoveRedEye />}
                        />,
                        <ListItem
                          key={2}
                          primaryText="Reglamentacija"
                          leftIcon={<ImageFilterFrames />}
                        />
                      ]}
                    />,
                    <ListItem
                      key={3}
                      primaryText="Pristatymas"
                      leftIcon={<PlacesAirportShuttle />}
                      onNestedListToggle={this.handleNestedListToggle}
                      disabled={true}
                      nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Pristatymo taisyklės"
                          leftIcon={<HardwareDeveloperBoard />}
                        />
                      ]}
                    />
                  ]}
                />
              </List>
            </Drawer>
            {this.props.isAuthenticated && (
              <div
                className={classnames("app-content", {
                  expanded: this.state.open
                })}
              />
            )}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Main;
