//* Dependencies
import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

//* Material-UI components, hooks, and icons
import TextField from "@material-ui/core/TextField";

//* Exported component
export const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;

  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

    //* Returns JSX to DOM
  return (
    <form>
      <TextField
        variant="outlined"
        label="Search Contacts"
        type="text"
        size="small"
        name="text"
        helperText="Search by name or email"
        inputRef={text}
        onChange={onChange}
        style={{ marginBottom: "1rem" }}
      />
    </form>
  );
};

export default ContactFilter;
