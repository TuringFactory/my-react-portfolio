import React, { Component } from "react";
import "../styles/transitions.css";
import "../styles/positioning.css";
import "../styles/colors.css";

const WorkExperience = () => {
  return (
    <React.Fragment>
      <div className="mt-5">
        <div className="block text-center" id="slidingWorkExp">
          <h2 className="skills-right background-skill">Angular</h2>
          <br></br>
          <h2 className="skills-left background-skill-2">Java</h2>
          <br></br>
          <h2 className="skills-right background-skill">JavaScript</h2>
          <br></br>
          <h2 className="skills-left background-skill-2">.NET</h2>
          <br></br>
          <h2 className="skills-right background-skill">React</h2>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WorkExperience;
