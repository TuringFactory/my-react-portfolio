import React, { Component } from "react";
import "../styles/positioning.css";
import "../styles/colors.css";
import "../styles/transitions.css";
import {
  rightSlideIn,
  leftSlideIn,
  bottomSlideIn,
} from "../styles/framerAnimations";
import { motion } from "framer-motion/dist/framer-motion";

class IntroPanel extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <motion.div className="row justify-content-center mt-3">
          <motion.div
            {...leftSlideIn}
            className="col-md-6 align-items-center d-flex"
          >
            <img
              className=" rounded-circle introProfilePic m-auto"
              src={require("../assets/images/profile.jpg")}
              alt="profile pic"
              align="center"
            ></img>
          </motion.div>
          <motion.div {...rightSlideIn} className="col-sm-4 mt-auto mb-auto">
            <span className="display-6">
              Hello! I'm <span className="deep-rusted-red"> Paul Nguyen</span>.
              I am a <span className="rusted-gold intro-text">FullStack</span>{" "}
              developer with four years of enterprise development experience.
            </span>
          </motion.div>
        </motion.div>
        <motion.div {...bottomSlideIn}>
          <hr className="m-auto mt-5 line1 line" width="0%" />
          <hr className="m-auto mt-5 line2 line" width="0%" />
          <hr className="m-auto mt-5 line3 line" width="0%" />
          <hr className="m-auto mt-5 line4 line" width="0%" />
          <hr className="m-auto mt-5 line5 line" width="0%" />
        </motion.div>
      </React.Fragment>
    );
  }
}

export default IntroPanel;
