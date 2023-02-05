import React, { Component } from "react";
import { Badge, Card } from "react-bootstrap";

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
              Hello! I'm Paul Nguyen. I am a FullStack developer with four years
              of enterprise development experience.
            </span>
          </div>
        </div>
        <div className="row justify-content-center"></div>
        <hr
          className="m-auto mt-5"
          width="50%"
          style={{ border: "3px solid red" }}
        />
      </React.Fragment>
    );
  }
}

export default IntroPanel;
