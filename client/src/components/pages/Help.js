//* Dependencies
import React from "react";

//* Material UI components, hooks, and icons
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

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

//* Exported component
const Help = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" style={{ marginTop: "5rem" }}>
        Help
      </Typography>
      <Grid
        container
        spacing={3}
        alignItems="center"
        justify="center"
        style={{ marginTop: "0rem" }}
      >
        <Grid item xs={12} sm={12} md={8} align="center">
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
