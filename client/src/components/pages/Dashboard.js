//* Dependencies
import React, { useContext, useEffect } from "react";

//* Material UI components, hooks, and icons
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

//* Custom components
import Contacts from "../contacts/Contacts";
import ContactFilter from "../contacts/ContactFilter";
import ContactFormModal from "../contacts/ContactFormModal";
import NavPanel from "../layout/NavPanel";

//* State context
import AuthContext from "../../context/auth/authContext";

//* Exported component
export const Dashboard = () => {
  //* Initializes state
  const authContext = useContext(AuthContext);

  //* Authenticates user token
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  //* Returns JSX to DOM
  return (
    <Container>
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          align="center"
          style={{ marginTop: "5rem" }}
        >
          <NavPanel />
          <ContactFilter />
          <Contacts />
        </Grid>
      </Grid>
      <ContactFormModal />
    </Container>
  );
};

export default Dashboard;
