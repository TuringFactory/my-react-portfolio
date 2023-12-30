import React, { Component } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import "../styles/colors.css";

function SplashMessage() {
  return (
    <div className="row vh-100 justify-content-center">
      <div className="col-3 d-flex align-items-center">
        <motion.div
          initial={{ scale: 0.7 }}
          animate={{ scale: [1, 0.7, 1] }}
          transition={{ duration: "1.5", repeat: Infinity }}
        >
          <h1>Preparing to bake...</h1>
        </motion.div>
      </div>
    </div>
  );
}

export default function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      console.log(props);
      this.state = {
        loading: true,
        continueToSite: false,
      };
    }

    setContinueToSite = () => {
      this.setState({
        continueToSite: !this.state.continueToSite,
      });
    };

    async componentDidMount() {
      try {
        // Put here your await requests/ API requests
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 1000);
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return SplashMessage();
      // once component is done loading, render the button that allows user to continue to site
      else if (!this.state.continueToSite)
        return (
          <div className="row vh-100 justify-content-center">
            <div className="col-4 d-flex align-items-center">
              <motion.div
                onClick={this.setContinueToSite}
                whileHover={{ scale: 1.5 }}
                initial={{ x: -1000 }}
                animate={{ x: 100, transition: { duration: ".5" } }}
              >
                <h2 style={{ cursor: "pointer" }} className="deep-rusted-red">
                  E N T E R
                </h2>
              </motion.div>
            </div>
          </div>
        );

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} showNav={true} />;
    }
  };
}
