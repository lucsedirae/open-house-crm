//* Dependencies
import React from "react";

//*Custom components
import SplashPanelA from "../static/SplashPanelA";
import SplashPanelB from "../static/SplashPanelB";
import SplashPanelC from "../static/SplashPanelC";
import Footer from "../layout/Footer";

//* Exported component
const Home = () => {
  //* Returns JSX to DOM
  return (
    <>
      <div className="landing">
        <SplashPanelA />
      </div>
      <div id="features">
        <SplashPanelB />
      </div>
      <div id="development">
        <SplashPanelC />
        <Footer />
      </div>
    </>
  );
};

export default Home;
