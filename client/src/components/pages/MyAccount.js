//* Dependencies
import React, { useContext, useEffect } from "react";
import styles from "./pages.module.css";

//* Material UI components, hooks, and icons
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

//* Custom components
import NavPanel from "../layout/NavPanel";
import UserForm from "../myAccount/UserForm";

//* State context
import AuthContext from "../../context/auth/authContext";

//* Exported component
const MyAccount = () => {
  //* Initializes context state
  const authContext = useContext(AuthContext);
  const { user } = authContext;

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
          style={{ marginTop: "5rem" }}
          align="center"
        >
          <NavPanel />
          <Paper className={styles.paper}>
            <Typography variant="h5">Account Details</Typography>
            <form className={styles.root} autoComplete="off">
              <Typography>
                <strong>Name: </strong>
                {user && user.name}
              </Typography>

              <Typography>
                <strong>Email: </strong>
                {user && user.email}
              </Typography>

              <Typography>
                <strong>Date joined: </strong>
                {user && user.date.slice(0, 10)}
              </Typography>
            </form>
          </Paper>
          <Paper className={styles.paper}>
            <UserForm />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyAccount;
