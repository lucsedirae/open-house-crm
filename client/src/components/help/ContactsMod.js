//* Dependencies
import React from "react";

//* Material UI components, hooks, and icons
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

//* Exported component
const ContactsMod = () => {
    //* Returns JSX to DOM
  return (
    <div id="contacts">
      <IconButton href="#">
        <ExpandLessIcon />
      </IconButton>

      <Card style={{ padding: "1rem" }}>
        <Typography variant="h5" style={{ margin: ".5rem" }}>
          Contacts Module
        </Typography>
        <img
          src="/img/contacts.gif"
          alt="Gif of agent forum in action"
          style={{ borderRadius: "5px", boxShadow: "3px 3px 5px" }}
        />
        <CardContent>
          <Typography variant="body1">
            The contacts module is the default view of the dashboard when a user
            logs into Open House. Here users can add, edit, delete, and update
            contact data. The contacts are stored in an accordion system to
            improve mobile user experience and keep the interface clean and free
            of distraction.
          </Typography>
          <br />
          <Typography variant="body1">
            The module also features a search bar directly underneath the{" "}
            <a href="#navpanel">navigation panel</a> allowing users to easily
            search for a contact. That contact's card is updated as the user
            types making searches quick and efficient.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactsMod;
