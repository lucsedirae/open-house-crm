//* Dependencies
import React, { useEffect, useContext } from "react";
import "../../App.css";

//* Material-UI components, hooks, and icons
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

//* Custom components
import InventoryForm from "../inventory/InventoryForm";
import InventoryGrid from "../inventory/InventoryGrid"
import InventoryItem from "../inventory/InventoryItem";
import NavPanel from "../layout/NavPanel";

//* State context
import AuthContext from "../../context/auth/authContext";
import InventoryContext from "../../context/inventory/inventoryContext";

//* Defines styles to be served via makeStyles MUI hook
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    marginBottom: "1rem",
  },
  header: {
    textAlign: "center",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
}));

//* Exported component
const Inventory = () => {
  //* Initializes styling classes
  const classes = useStyles();

  //* Initializes state
  const authContext = useContext(AuthContext);
  const inventoryContext = useContext(InventoryContext);

  //* Authenticates user token
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
    getInventory();
  }, []);

  //* Returns JSX to DOM if inventory is empty
  if (inventory !== null && inventory.length === 0 && !loading) {
    return (
      <Typography variant="h4" align="center" style={{ marginTop: "3rem" }}>
        Inventory List is Empty!
      </Typography>
    );
  }

  //*Returns JSX to DOM if inventory is not empty
  else if (inventory !== null && !loading){
    return (
      <Container>
        <Typography variant="h4" className={classes.header}>
          Inventory
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            <NavPanel />
            <InventoryForm />
          </Grid>
  
          <Grid item xs={12} sm={12} md={6}>
      <InventoryItem />
          </Grid>
        </Grid>
        <Grid item xs={12}>
      <InventoryGrid />
        </Grid>
      </Container>
    );
    }
    //* if inventory is not empty but loading is true
    return (
      <Fragment>
        <Spinner />
      </Fragment>
    );
};

export default Inventory;
