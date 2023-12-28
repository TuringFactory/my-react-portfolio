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
        <div className="container-fluid">
          <motion.div className="row justify-content-center mt-3">
            <div className="col-md-6">
              {" "}
              <motion.div
                {...leftSlideIn}
                className="row-md-6 align-items-center d-flex"
              >
                <img
                  className=" rounded-circle introProfilePic m-auto"
                  src={require("../assets/images/profile.jpg")}
                  alt="profile pic"
                  align="center"
                ></img>
              </motion.div>{" "}
            </div>

            <motion.div {...rightSlideIn} className="row introDivTextWidth">
              <span className="mr-5 ml-5 introTextSize">
                Hello! I'm <span className="deep-rusted-red"> Paul Nguyen</span>
                . I am a{" "}
                <span className="rusted-gold intro-text ">FullStack</span>{" "}
                developer with four years of enterprise development experience.
              </span>
            </motion.div>
          </motion.div>{" "}
        </div>
      </React.Fragment>
    );
  }
}

export default IntroPanel;
