import React from "react";
import PropTypes from "prop-types";
import Contacts from "../contacts/Contacts";
export const Home = () => {
  return (
    <div className="jumbotron jumbotron-fluid px-2">
      <h1>Open House CRM</h1>
      <p>
        An open source React library for building business dashboards and
        customer relationship management apps quickly and professionally
      </p>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary">
          Login
        </button>
        <button type="button" class="btn btn-secondary">
          Register
        </button>
        <button type="button" class="btn btn-secondary">
          Learn More
        </button>
      </div>
    </div>
  );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
