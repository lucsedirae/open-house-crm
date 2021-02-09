//* Dependencies
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import setAuthToken from "./utils/setAuthToken";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ToastProvider } from "react-toast-notifications";

//* Custom components
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
import Forum from "./components/pages/Forum";
import Help from "./components/pages/Help";

//* State context
import AlertState from "./context/alert/AlertState";
import AuthState from "./context/auth/AuthState";
import ContactState from "./context/contact/ContactState";
import ModalState from "./context/modal/ModalState";
import InventoryState from "./context/inventory/InventoryState";
import TransactionState from "./context/transactions/TransactionState";

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
        <InventoryState>
          <TransactionState>
            <AlertState>
              <ModalState>
                <ToastProvider placement="bottom-left">
                  <Router>
                    <Fragment>
                      <CssBaseline />
                      <Appbar />
                      <Alerts />

                      <Switch>
                        <Route exact path="/" component={Home} />
                        <PrivateRoute
                          exact
                          path="/dashboard"
                          component={Dashboard}
                        />
                        <PrivateRoute
                          exact
                          path="/account"
                          component={MyAccount}
                        />
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
                        <PrivateRoute exact path="/Help" component={Help} />
                        <PrivateRoute exact path="/forum" component={Forum} />
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
                    </Fragment>
                  </Router>
                </ToastProvider>
              </ModalState>
            </AlertState>
          </TransactionState>
        </InventoryState>
      </ContactState>
    </AuthState>
  );
};

export default App;
