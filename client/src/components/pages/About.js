import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="jumbotron jumbotron-fluid px-2">
      {/*Row 1  */}
      {/*! To be componentized */}
      <div className="row">
        <div className="col">
          <h1>Open House CRM</h1>
          <h3>Open for business...</h3>
          <p>
            Open House is an open source platform for building full-featured
            customer relationship management dashboards and utilities quickly.
            Designed with modularity as a key priority, Open House allows
            developers to customize the range of services offered and adjust
            fees accordingly. Developed under the GNU General Public License,
            Open House is community developed and maintained.
            <br />
            <strong>Bottom line:</strong> think WordPress for business
            dashboards.
          </p>
        </div>
      </div>
      {/*Row 2  */}
      {/*! To be componentized */}
      <div className="row">
        <div className="col">
          <h3>Developer News</h3>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Latest Version: 0.3.0</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                The current version is a development build that features a demo
                site demonstrating the core features of the platform.
              </h6>
              <ul className="list-group my-2">
                <li className="list-group-item">
                  12/26/2020 - Node/Mongo back-end and React template in place
                </li>
                <li className="list-group-item">
                  12/24/2020 - Conversion to React in process
                </li>
              </ul>
              <Link className="card-link" to="/github" target="_blank">
                {/* Replace GitHub link with a font aw */}
                <i className="fab fa-github text-dark mx-1" />
                GitHub
              </Link>
            </div>
          </div>
          {/*Row 3  */}
          {/*! To be componentized */}
          <div className="row">
            <div className="col">
              <h3 className="my-2">Future Development</h3>
              <div className="card">
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">
                    The following features are planned for future development:
                  </h6>
                  <ul className="list-group my-2">
                    <li className="list-group-item">
                      Ship a build to npm as an open source React library
                      package
                    </li>
                    <li className="list-group-item">
                      Utilize npm command line to initiate template build as
                      part of final library package
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {};

About.defaultProps = {};
export default About;
