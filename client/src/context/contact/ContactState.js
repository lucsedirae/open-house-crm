import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  // UPDATE_CONTACT,
  // FILTER_CONTACTS,
  // CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jill Johnson",
        email: "jill@gmail.com",
        phone: "111-111-1111",
        streetNumber: "99",
        street: "Garrison St",
        address2: null,
        city: "Anywhere",
        state: "VA",
        zipcode: "22222",
        type: "client",
      },
      {
        id: 2,
        name: "Sara Watson",
        email: "sara@gmail.com",
        phone: "222-222-2222",
        streetNumber: "123",
        street: "Main St",
        address2: null,
        city: "Anywhere",
        state: "VA",
        zipcode: "22222",
        type: "client",
      },
      {
        id: 3,
        name: "Harry White",
        email: "harry@gmail.com",
        phone: "333-333-3333",
        streetNumber: "512",
        street: "Peach St",
        address2: "Suite 101",
        city: "Anywhere",
        state: "VA",
        zipcode: "22222",
        type: "vendor",
      },
      {
        id: 4,
        name: "Bob Bobenstein",
        email: "bob@gmail.com",
        phone: "555-333-3333",
        streetNumber: null,
        street: null,
        address2: null,
        city: null,
        state: null,
        zipcode: null,
        type: "prospect",
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //* Add Contact
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //* Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //* Set Current Contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  //* Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //* Update Contact

  //* Filter Contacts

  //* Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
