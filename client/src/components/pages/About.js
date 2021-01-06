//* Dependencies and hooks
import React from "react";
import { Link } from "react-router-dom";

//* Material UI components, hooks, and icons

//* Custom components
import AboutPanelA from "../static/AboutPanelA";
import AboutPanelB from "../static/AboutPanelB";
import AboutPanelC from "../static/AboutPanelC";

export const About = () => {
  return (
    <div>
      <AboutPanelA />
      <AboutPanelB />
      <AboutPanelC />
    </div>
  );
};

About.propTypes = {};

About.defaultProps = {};
export default About;
