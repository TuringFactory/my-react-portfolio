import React, { Component } from "react";
import { vcu, jsarge } from "../assets/data/education";
import Education from "./education";
class EducationPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Education school={vcu}></Education>
        <Education school={jsarge}></Education>
      </React.Fragment>
    );
  }
}

export default EducationPage;
