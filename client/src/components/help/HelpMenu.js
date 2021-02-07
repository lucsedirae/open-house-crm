//* Dependencies
import React, { Fragment } from "react";

//* Material-UI comps, hooks, icons
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

//* Exported component
const HelpMenu = () => {
  const classes = useStyles();

  return (
    <Fragment className={classes.root}>
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

export default HelpMenu