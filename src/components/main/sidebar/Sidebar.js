import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import FlatButton from "material-ui/FlatButton";
import ActionGrade from "material-ui/svg-icons/action/grade";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import ContentDrafts from "material-ui/svg-icons/content/drafts";
import ContentSend from "material-ui/svg-icons/content/send";
import Subheader from "material-ui/Subheader";
import Toggle from "material-ui/Toggle";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import classnames from "classnames";

class Sidebar extends Component {
  state = {
    open: false
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
              title="logo"
              iconElementRight={<FlatButton label="veikia" />}
            />
            <Drawer
              docked={true}
              open={this.state.open}
              onRequestChange={open => this.setState({ open })}
            >
              <List>
                <Subheader>Menu</Subheader>
                <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
                <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
                <ListItem
                  primaryText="Inbox"
                  leftIcon={<ContentInbox />}
                  initiallyOpen={true}
                  primaryTogglesNestedList={true}
                  nestedItems={[
                    <ListItem
                      key={1}
                      primaryText="Starred"
                      leftIcon={<ActionGrade />}
                    />,
                    <ListItem
                      key={2}
                      primaryText="Sent Mail"
                      leftIcon={<ContentSend />}
                      disabled={true}
                      nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Drafts"
                          leftIcon={<ContentDrafts />}
                        />
                      ]}
                    />,
                    <ListItem
                      key={3}
                      primaryText="Inbox"
                      leftIcon={<ContentInbox />}
                      open={this.state.open}
                      onNestedListToggle={this.handleNestedListToggle}
                      nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Drafts"
                          leftIcon={<ContentDrafts />}
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
              >
                {" "}
                {this.props.children}{" "}
              </div>
            )}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Sidebar;
