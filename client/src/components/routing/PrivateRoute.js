//* Dependencies
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

//* State Context
import AuthContext from "../../context/auth/authContext";

//* Exported component
const PrivateRoute = ({ component: Component, ...rest }) => {
  //* Initializes state context
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  //* Returns JSX to DOM
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
