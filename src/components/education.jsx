import React, { Component } from "react";
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
          <img
            className=""
            src={this.props.school ? this.props.school.logo : ""}
            alt=""
            width="300"
          ></img>
          <div className="  ">
            <span className=" display-6">Degree</span>
            <br></br>
            <span>{this.props.school ? this.props.school.degree : ""}</span>
          </div>
          <div className="">
            <span className="display-6">Major</span>
            <br></br>
            <span>{this.props.school ? this.props.school.major : ""}</span>
          </div>
        </motion.div>
      </React.Fragment>
    );
  }
}

export default Education;
