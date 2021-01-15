//* Dependencies
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//* Custom components
import About from "./components/pages/About";
import Appbar from "./components/layout/Appbar";
import Dashboard from "./components/pages/Dashboard";
import Develop from "./components/pages/Develop";
import Home from "./components/pages/Home";

//* State context
import ContactState from "./context/contact/ContactState";

const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <Appbar />
          <div className="container-fluid my-3">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/develop" component={Develop} />
              <Route
                path="/github"
                component={() => {
                  window.location.href =
                    "https://github.com/lucsedirae/open-house-crm";
                  return null;
                }}
              />{" "}
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
};

export default App;
