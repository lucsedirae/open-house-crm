//* Dependencies
import React, { useContext, useEffect } from "react";

//* Material UI components, hooks, and icons
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

//* Custom components
import AgentForum from "../help/AgentForum";
import Analytics from "../help/Analytics";
import ContactsMod from "../help/ContactsMod";
import InventoryMod from "../help/InventoryMod";
import MyAcct from "../help/MyAcct";
import NavPanelHelp from "../help/NavPanelHelp";
import TransactionsMod from "../help/TransactionsMod";
import HelpMenu from "../help/HelpMenu";
import NavPanel from "../layout/NavPanel";

//* State context
import AuthContext from "../../context/auth/authContext";

//* Exported component
const Help = () => {
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
          <Paper style={{ marginTop: "1rem" }}>
            <HelpMenu />
            <AgentForum />
            <Analytics id="analytics" />
            <ContactsMod id="contacts" />
            <InventoryMod id="inventory" />
            <NavPanelHelp id="navpanel" />
            <TransactionsMod id="transactions" />
            <MyAcct id="myacct" />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Help;
