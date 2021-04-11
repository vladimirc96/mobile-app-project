import DrawerNavigator from "../routes/drawer";
import FirstRunNavigator from "../routes/firstRunStack";
import React from "react";
import { connect } from "react-redux";

export class Entry extends React.Component {
  render() {
    return this.props.token ? <DrawerNavigator /> : <FirstRunNavigator />;
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.authenticationReducer.token,
  };
};

export default connect(mapStateToProps)(Entry);
