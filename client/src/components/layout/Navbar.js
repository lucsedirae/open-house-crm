import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export const Navbar = ({ title, icon, brand, navbar }) => {
  return (
    <div className={navbar}>
      <h1 className={brand}>
        <i className={icon} /> {title}
      </h1>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="text-light mx-1" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="text-light mx-1" to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  brand: PropTypes.string,
  navbar: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Open House CRM",
  icon: "fas fa-id-card-alt",
  brand: "navbar-brand ",
  navbar: "navbar navbar-expand-lg navbar-light bg-primary",
};

export default Navbar;
