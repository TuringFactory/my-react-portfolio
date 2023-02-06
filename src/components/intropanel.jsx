import React, { Component } from "react";
import { Badge, Card } from "react-bootstrap";
import "../styles/positioning.css";
import "../styles/colors.css";

class IntroPanel extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-center mt-3">
          <img
            className=" rounded-circle col-sm-3 "
            src={require("../assets/images/IMG20221231105311.jpg")}
            alt="profile pic"
            align="center"
          ></img>
          <div className="col-sm-4 mt-auto mb-auto">
            <span className="display-6">
              Hello! I'm <span className="deep-rusted-red"> Paul Nguyen</span>.
              I am a <span className="rusted-gold intro-text">FullStack</span>{" "}
              developer with four years of enterprise development experience.
            </span>
          </div>
        </div>
        <div className="row justify-content-center"></div>
        <hr className="m-auto mt-5 line" width="50%" />
        <hr className="m-auto mt-5 line" width="45%" />
        <hr className="m-auto mt-5 line" width="40%" />
        <hr className="m-auto mt-5 line" width="35%" />
        <hr className="m-auto mt-5 line" width="30%" />
      </React.Fragment>
    );
  }
}

export default IntroPanel;
