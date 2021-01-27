//* Dependencies
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import setAuthToken from "./utils/setAuthToken";
import "./App.css";

//* Custom components
import About from "./components/pages/About";
import Alerts from "./components/layout/Alerts";
import Appbar from "./components/layout/Appbar";
import Dashboard from "./components/pages/Dashboard";
import Develop from "./components/pages/Develop";
import Home from "./components/pages/Home";
import Inventory from "./components/pages/Inventory";
import Login from "./components/auth/Login";
import MyAccount from "./components/pages/MyAccount";
import PrivateRoute from "./components/routing/PrivateRoute";
import Register from "./components/auth/Register";
import Transactions from "./components/pages/Transactions";
import ChartsPage from "./components/pages/ChartsPage";

//* State context
import AlertState from "./context/alert/AlertState";
import AuthState from "./context/auth/AuthState";
import ContactState from "./context/contact/ContactState";
import ModalState from "./context/modal/ModalState";

//* Sets token if user is authenticated
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

//* Exported component
const App = () => {
  //* Returns JSX to DOM
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <ModalState>
            <Router>
              <Fragment>
                <Appbar />
                <Alerts />
                <div className="container-fluid my-3">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <PrivateRoute
                      exact
                      path="/dashboard"
                      component={Dashboard}
                    />
                    <PrivateRoute exact path="/account" component={MyAccount} />
                    <PrivateRoute
                      exact
                      path="/dashboard/transactions"
                      component={Transactions}
                    />
                    <PrivateRoute
                      exact
                      path="/dashboard/charts"
                      component={ChartsPage}
                    />
                    <PrivateRoute
                      exact
                      path="/dashboard/inventory"
                      component={Inventory}
                    />
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
          </ModalState>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
