import React from "react";
export const Home = () => {
  return (
    <div className="jumbotron jumbotron-fluid px-2">
      <h1>Open House CRM</h1>
      <br />
      <h5>
        An open source React library for building business dashboards and
        customer relationship management apps quickly and professionally
      </h5>
      <br />
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
