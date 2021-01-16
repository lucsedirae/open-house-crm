//* Dependencies
import React, { Fragment, useContext } from "react";
import "../../App.css";

//* Custom components
import ContactItem from "./ContactItem";

//* State context
import ContactContext from "../../context/contact/contactContext";
import { Typography } from "@material-ui/core";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return (
      <Typography variant="h4" align="center" style={{ marginTop: "3rem" }}>
        Contact List is Empty!
      </Typography>
    );
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </Fragment>
  );
};

export default Contacts;
