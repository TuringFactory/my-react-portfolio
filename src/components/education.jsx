import React, { Component } from "react";
import "../styles/positioning.css";
import { motion } from "framer-motion/dist/framer-motion";
import { diagonalFadeIn } from "../styles/framerAnimations";
class Education extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <motion.div
          {...diagonalFadeIn}
          className=" d-flex flex-column align-items-center mt-5 mb-5"
        >
          <div className="educationImg">
            <img
              src={this.props.school ? this.props.school.logo : ""}
              alt=""
              width={"250px"}
            ></img>
          </div>
          <div>
            <span className=" display-6">Degree</span>
            <br></br>
            <span>{this.props.school ? this.props.school.degree : ""}</span>
          </div>
          <div>
            <span className="display-6 text-left">Major</span>
            <br></br>
            <span>{this.props.school ? this.props.school.major : ""}</span>
          </div>
        </motion.div>
      </React.Fragment>
    );
  }
}

export default Education;
