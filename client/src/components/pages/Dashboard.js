import React from "react";
import PropTypes from "prop-types";
import Contacts from "../contacts/Contacts";

export const Dashboard = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h1 className="text-center">Dashboard</h1>
        </div>
      </div>

      <div className="row">
        <div className="col">
            <Contacts />
        </div>
        <div className="col"></div>
        <div className="row"></div>
      </div>
    </div>
  );
};

export default Dashboard;
