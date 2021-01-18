//* Dependencies
import React, { Fragment, useContext, useEffect } from "react";
import "../../App.css";

//* Material-UI components, hooks, and icons
import Typography from "@material-ui/core/Typography";

//* Custom components
import ContactItem from "./ContactItem";
import Spinner from "../layout/Spinner";

//* State context
import ContactContext from "../../context/contact/contactContext";

//* Exported component
const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return (
      <Typography variant="h4" align="center" style={{ marginTop: "3rem" }}>
        Contact List is Empty!
      </Typography>
    );
  }

  //* Returns JSX to DOM
  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <Fragment>
          {filtered !== null
            ? filtered.map((contact) => (
                <ContactItem key={contact._id} contact={contact} />
              ))
            : contacts.map((contact) => (
                <ContactItem key={contact._id} contact={contact} />
              ))}
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contacts;
