//* Dependencies
import React from "react";

//* Material UI components, hooks, and icons
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import PhoneIcon from "@material-ui/icons/Phone";

//* Defines styles to be served via makeStyles MUI hook
const useStyles = makeStyles({
  buttonGroup: {
    justifyContent: "center",
  },
});

//* Exported component
const ContactButtons = ({ email, phone }) => {
  //* Initializes styling classes
  const classes = useStyles();

  //* Returns JSX to DOM
  return (
    <ButtonGroup className={classes.buttonGroup}>
      <Button
        variant="contained"
        startIcon={<ContactMailIcon />}
        href={`mailto:${email}`}
        size="small"
        className="contact-btns"
      >
        {email}
      </Button>
      <Button
        variant="contained"
        startIcon={<PhoneIcon />}
        href={`tel:${phone}`}
        style={{ backgroundColor: "#008B8B", color: "white" }}
        size="small"
        className="contact-btns"
      >
        {phone}
      </Button>
    </ButtonGroup>
  );
};

export default ContactButtons;
