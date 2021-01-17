//* Dependencies
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import setAuthToken from "./utils/setAuthToken"
import "./App.css";

//* Custom components
import About from "./components/pages/About";
import Alerts from "./components/layout/Alerts";
import Appbar from "./components/layout/Appbar";
import Dashboard from "./components/pages/Dashboard";
import Develop from "./components/pages/Develop";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

//* State context
import AlertState from "./context/alert/AlertState";
import AuthState from "./context/auth/AuthState";
import ContactState from "./context/contact/ContactState";

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
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
              <Alerts />
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
