import IntroPanel from "./components/intropanel";
import "./App.css";
import React, { Component } from "react";
import withSplashScreen from "./components/splashScreen";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <IntroPanel id="intro"></IntroPanel>
      </React.Fragment>
    );
  }
}

export default withSplashScreen(App);
