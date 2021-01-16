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
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"


//* State context
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";

const App = () => {
  return (
    <AuthState>
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
                <Route exact path="/Register" component={Register} />
                <Route exact path="/Login" component={Login} />
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
    </AuthState>
  );
};

export default App;
