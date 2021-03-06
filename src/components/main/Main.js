import React, { Component } from "react";

import User from "./panel/User";
import Schedule from "./panel/Schedule";
import Loading from "./panel/Loading";
import ChangeDate from "./panel/ChangeDate";
import Payments from "./panel/Payments";
import Header from "./panel/Header";
import Comment from "./panel/Comment";
import Order from "./panel/Order";

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
import Avatar from "material-ui/Avatar";
import Badge from "material-ui/Badge";
import IconButton from "material-ui/IconButton";
import NotificationsIcon from "material-ui/svg-icons/social/notifications";
import ActionEuroSymbol from "material-ui/svg-icons/action/euro-symbol";
import ActionAddShoppingCart from "material-ui/svg-icons/action/add-shopping-cart";

class Main extends Component {
  state = {
    open: true,
    pageState: "userPanel",
    loading: false,
    thisPage: "Kliento skydelis"
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    this.setState({ open: true });
  };

  handlePage = page => {
    if (page === "schedule") {
      this.setState({
        pageState: page,
        loading: false,
        thisPage: "Grafikai"
      });
    }

    if (page === "userPanel") {
      this.setState({
        pageState: page,
        loading: false,
        thisPage: "Kliento skydelis"
      });
    }
    if (page === "changeDate") {
      this.setState({
        pageState: page,
        loading: false,
        thisPage: "Keisti kalendorių"
      });
    }
    if (page === "payments") {
      this.setState({
        pageState: page,
        loading: false,
        thisPage: "Užsakymų istorija"
      });
    }
    if (page === "order") {
      this.setState({
        pageState: page,
        loading: false,
        thisPage: "Paslaugų užsakymas"
      });
    }
  };

  render() {
    const styles = {
      alert: {
        width: 16,
        height: 16,
        top: -16,
        right: 4,
        fontSize: 9,
        backgroundColor: "#dc5f4b"
      },
      bell: { top: -40, color: "white" },
      addMoney: { backgroundColor: "#bda26d" },
      appBar: { color: "white", backgroundColor: "#6c8fae" }
    };
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <div>
            <AppBar
              className={classnames("app-bar", { expanded: this.state.open })}
              onLeftIconButtonClick={this.handleToggle}
              title={
                <div className="page-title-cont">
                  <span className="page-title">{this.state.thisPage}</span>
                </div>
              }
              style={styles.appBar}
              iconElementRight={
                <div className="profile-cont">
                  <ListItem
                    style={styles.appBar}
                    className="profile"
                    leftAvatar={<Avatar size={40} src="assets/mantvydas.jpg" />}
                    primaryText={
                      <span className="profile-name">Mantvydas B.</span>
                    }
                    rightIcon={
                      <Badge
                        badgeContent={1}
                        secondary={true}
                        badgeStyle={styles.alert}
                      >
                        <IconButton style={styles.bell} tooltip="Notifications">
                          <NotificationsIcon color={"white"} />
                        </IconButton>
                      </Badge>
                    }
                  />
                </div>
              }
            />

            <Drawer
              docked={true}
              open={this.state.open}
              onRequestChange={open => this.setState({ open })}
            >
              <List>
                <Subheader>
                  <div className="logo-container ">
                    <img src="assets/grudai.png" alt="grudai" />
                    <span>Klientų Sistema</span>
                  </div>
                </Subheader>
                <ListItem
                  primaryText="Kliento skydelis"
                  onClick={() => {
                    // this.handlePage("userPanel");
                    this.setState({
                      loading: true
                    });
                    setTimeout(() => {
                      this.handlePage("userPanel");
                    }, 1000);
                  }}
                  leftIcon={<ActionAccountCircle />}
                />
                <ListItem
                  primaryText="Užsakymų istorija"
                  onClick={() => {
                    // this.handlePage("userPanel");
                    this.setState({
                      loading: true
                    });
                    setTimeout(() => {
                      this.handlePage("payments");
                    }, 500);
                  }}
                  leftIcon={<ActionEuroSymbol />}
                />
                <ListItem
                  primaryText="Paslaugų užsakymas"
                  onClick={() => {
                    // this.handlePage("userPanel");
                    this.setState({
                      loading: true
                    });
                    setTimeout(() => {
                      this.handlePage("order");
                    }, 500);
                  }}
                  leftIcon={<ActionAddShoppingCart />}
                />
                <ListItem
                  primaryText="Grafikai"
                  onClick={() => {
                    this.setState({
                      loading: true
                    });
                    setTimeout(() => {
                      this.handlePage("schedule");
                    }, 500);
                  }}
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
                      onClick={() => {
                        this.setState({
                          loading: true
                        });
                        setTimeout(() => {
                          this.handlePage("changeDate");
                        }, 100);
                      }}
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
                        />,
                        <ListItem
                          key={3}
                          primaryText="Prideti dokumentus"
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
            <div
              className={classnames("app-content", {
                expanded: this.state.open
              })}
            />
            <div
              className={classnames("app-container", {
                expanded: this.state.open
              })}
            >
              <div className="content-box">
                <Header />
                {this.state.pageState === "userPanel" && !this.state.loading ? (
                  <User />
                ) : null}
                {this.state.pageState === "schedule" && !this.state.loading ? (
                  <Schedule />
                ) : null}
                {this.state.pageState === "changeDate" &&
                !this.state.loading ? (
                  <ChangeDate />
                ) : null}
                {this.state.pageState === "payments" && !this.state.loading ? (
                  <Payments />
                ) : null}
                {this.state.pageState === "order" && !this.state.loading ? (
                  <Order />
                ) : null}
                {this.state.loading ? <Loading /> : null}

                <Comment />
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Main;
