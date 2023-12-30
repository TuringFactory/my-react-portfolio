import IntroPanel from "./components/intropanel";
import "./App.css";
import React, { Component } from "react";
import withSplashScreen from "./components/splashScreen";
import { RouterProvider, createHashRouter } from "react-router-dom";
import MyNavbar from "./components/navbar";
import WorkExperience from "./components/workexperience";
import EducationPage from "./components/educationPage";

class App extends Component {
  updateShowNav = (value) => {
    this.setState({ showNav: value });
  };
  constructor(props) {
    super(props);

    this.state = {
      showNav: this.props.showNav,
    };

    this.router = createHashRouter([
      {
        path: "/",
        element: <IntroPanel></IntroPanel>,
      },
      {
        path: "/workexperience",
        element: <WorkExperience></WorkExperience>,
      },
      {
        path: "/education",
        element: <EducationPage></EducationPage>,
      },
    ]);
  }
  render() {
    return (
      <React.Fragment>
        <MyNavbar
          showNav={this.state.showNav}
          updateShowNav={this.updateShowNav}
        ></MyNavbar>
        {/* <IntroPanel id="intro"></IntroPanel> */}
        <RouterProvider router={this.router}></RouterProvider>
      </React.Fragment>
    );
  }
}
export default withSplashScreen(App);
