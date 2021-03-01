//* Dependencies
import React from "react";
import styles from "./contacts.module.css";

//* Material UI components, hooks, and icons
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import PhoneIcon from "@material-ui/icons/Phone";

//* Exported component
const ContactButtons = ({ email, phone }) => {
  //* Returns JSX to DOM
  return (
    <ButtonGroup className={styles.buttonGroup}>
      <Button
        variant="contained"
        startIcon={<ContactMailIcon />}
        href={`mailto:${email}`}
        size="small"
        className={styles.contactBtns}
      >
        {email}
      </Button>
      <Button
        variant="contained"
        startIcon={<PhoneIcon />}
        href={`tel:${phone}`}
        size="small"
        className={(styles.contactBtns, styles.phoneButton)}
      >
        {phone}
      </Button>
    </ButtonGroup>
  );
};

export default ContactButtons;
