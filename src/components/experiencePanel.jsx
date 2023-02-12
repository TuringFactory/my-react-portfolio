import React, { Component } from "react";
import "../styles/positioning.css";
import { motion } from "framer-motion/dist/framer-motion";
import { diagonalFadeIn } from "../styles/framerAnimations";
class ExperiencePanel extends Component {
  state = {
    job: {},
  };
  constructor(props) {
    super(props);
    this.state = { job: this.props.job };
  }

  formatResponsibilities = () => {
    if (this.state.job.responsibilities)
      return this.state.job.responsibilities.map((e, index) => (
        <div className=" text-left" key={index}>
          {e}
        </div>
      ));
  };
  formatImg = () => {
    if (this.state.job.logo) return this.state.job.logo;
  };

  render() {
    return (
      <React.Fragment>
        <motion.div {...diagonalFadeIn} className="w-50 mt-5">
          {this.state.job.logo && (
            <img className="expImg" src={this.formatImg()}></img>
          )}
          <h4 className="display-6"> {this.state.job.title} </h4>
          {this.formatResponsibilities()}
        </motion.div>
      </React.Fragment>
    );
  }
}

export default ExperiencePanel;
