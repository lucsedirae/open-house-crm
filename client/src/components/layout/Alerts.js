//* Dependencies
import React, { Fragment, useContext } from "react";

//* Material-UI components, hooks, and icons
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ErrorIcon from "@material-ui/icons/Error";

//* State context
import AlertContext from "../../context/alert/alertContext";

const Alerts = () => {
  //* Initializes the alert state context
  const alertContext = useContext(AlertContext);

  //*Returning jsx
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <Container>
          <Typography variant="body1" align="center">
            <ErrorIcon />
            <div>{alert.msg}</div>
          </Typography>
        </Container>
      </div>
    ))
  );
};

export default Alerts;
