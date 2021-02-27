//* Dependencies
import React, { Fragment } from "react";
import styles from "./help.module.css";

//* Material-UI comps, hooks, icons
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

//* Exported component
const HelpMenu = () => {
  //* Returns JSX to DOM
  return (
    <Fragment className={styles.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Choose a topic to learn more...</Typography>
        </AccordionSummary>

        <Divider />
        <List component="nav" aria-label="secondary mailbox folders">
          <ListItemLink href="#forum">
            <ListItemText primary="Agent Forum" />
          </ListItemLink>
          <ListItemLink href="#analytics">
            <ListItemText primary="Analytics Module" />
          </ListItemLink>
          <ListItemLink href="#contacts">
            <ListItemText primary="Contacts Module" />
          </ListItemLink>
          <ListItemLink href="#inventory">
            <ListItemText primary="Inventory Module" />
          </ListItemLink>
          <ListItemLink href="#navpanel">
            <ListItemText primary="Navigation Panel" />
          </ListItemLink>
          <ListItemLink href="#transactions">
            <ListItemText primary="Transactions Module" />
          </ListItemLink>
          <ListItemLink href="#myacct">
            <ListItemText primary="User Account Panel (My Account)" />
          </ListItemLink>
        </List>
      </Accordion>
    </Fragment>
  );
};

export default HelpMenu;
