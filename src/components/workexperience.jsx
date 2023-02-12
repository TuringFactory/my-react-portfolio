import React, { Component } from "react";
import "../styles/transitions.css";
import "../styles/positioning.css";
import "../styles/colors.css";
import ExperiencePanel from "./experiencePanel";
import { Container, Row } from "react-bootstrap";
import {
  LMExperience,
  GEICOExperience,
  InternGEICOExperience,
} from "../assets/data/workResponsibilities";

class WorkExperience extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="">
          <Row className="justify-content-center">
            <ExperiencePanel job={LMExperience}></ExperiencePanel>
            <br></br>
          </Row>
          <Row className="justify-content-center">
            <ExperiencePanel job={GEICOExperience}></ExperiencePanel>
            <br></br>
          </Row>
          <Row className="justify-content-center">
            <ExperiencePanel job={InternGEICOExperience}></ExperiencePanel>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default WorkExperience;
