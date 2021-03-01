//* Dependencies
import React, { useState, useContext, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import styles from "./contacts.module.css";

//* Material UI components, hooks, and icons
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

//*Custom components & data imports
import statesUS from "./stateField.json";

//* State context
import ContactContext from "../../context/contact/contactContext";

//* Exported component
const ContactForm = ({ handleClose }) => {
  //* react-toast-notifications custom hook
  const { addToast } = useToasts();

  //* Initializes context state
  const contactContext = useContext(ContactContext);
  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        streetNumber: "",
        street: "",
        address2: "",
        city: "",
        state: "",
        zipcode: "",
        type: "",
        note: "",
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    streetNumber: "",
    street: "",
    address2: "",
    city: "",
    state: "",
    zipcode: "",
    type: "",
    note: "",
  });

  const {
    name,
    email,
    phone,
    type,
    streetNumber,
    street,
    address2,
    city,
    state,
    zipcode,
    note,
  } = contact;

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
      addToast("Contact saved!", {
        appearance: "success",
        autoDismiss: true,
      });
    } else {
      updateContact(contact);
      addToast("Contact updated!", {
        appearance: "success",
        autoDismiss: true,
      });
    }

    setContact({
      name: "",
      email: "",
      phone: "",
      streetNumber: "",
      street: "",
      address2: "",
      city: "",
      state: "",
      zipcode: "",
      type: "",
      note: "",
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  //* Returns JSX to DOM
  return (
    <form className={styles.root} autoComplete="off" onSubmit={onSubmit}>
      <Typography variant="h5" className={styles.title}>
        {current ? "Edit Contact" : "Add Contact"}
      </Typography>

      <Grid container>
        <Grid item xs={12} md={6}>
          <TextField
            variant="standard"
            required={true}
            type="text"
            id="standard-required"
            label="Name"
            size="small"
            helperText="Required"
            name="name"
            value={name}
            onChange={onChange}
            className={styles.textField}
          />
          <TextField
            required={true}
            variant="standard"
            label="Contact Type"
            size="small"
            name="type"
            select
            helperText="Required"
            value={type}
            onChange={onChange}
            className={styles.textField}
            style={{ width: "12rem" }}
          >
            <MenuItem key="client" value="client">
              Client
            </MenuItem>
            <MenuItem key="prospect" value="prospect">
              Prospect
            </MenuItem>
            <MenuItem key="vendor" value="vendor">
              Vendor
            </MenuItem>
          </TextField>

          <TextField
            variant="standard"
            label="Phone"
            type="phone"
            size="small"
            name="phone"
            value={phone}
            onChange={onChange}
          />
          <TextField
            variant="standard"
            label="Email"
            type="email"
            size="small"
            name="email"
            value={email}
            onChange={onChange}
            className={styles.textField}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="standard"
            label="Street Number"
            type="number"
            size="small"
            name="streetNumber"
            value={streetNumber}
            onChange={onChange}
          />
          <TextField
            variant="standard"
            label="Street"
            type="text"
            size="small"
            name="street"
            value={street}
            onChange={onChange}
          />
          <TextField
            variant="standard"
            label="Additional Address"
            type="text"
            size="small"
            name="address2"
            value={address2}
            onChange={onChange}
          />
          <TextField
            variant="standard"
            label="State"
            type="text"
            size="small"
            name="state"
            select
            value={state}
            onChange={onChange}
            style={{ width: "12rem" }}
          >
            {statesUS.map((abbr) => (
              <MenuItem key={abbr} value={abbr}>
                {abbr}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            variant="standard"
            label="City"
            size="small"
            type="text"
            name="city"
            value={city}
            onChange={onChange}
          />

          <TextField
            variant="standard"
            label="Zip"
            type="number"
            size="small"
            name="zipcode"
            value={zipcode}
            onChange={onChange}
          />
        </Grid>
      </Grid>

      <TextField
        variant="standard"
        label="Notes"
        id="standard-textarea"
        type="text"
        name="note"
        style={{ width: "100%" }}
        rows={4}
        multiline
        value={note}
        onChange={onChange}
      />

      <Button
        variant="contained"
        type="submit"
        fullWidth={true}
        className={styles.button}
        onClick={handleClose}
      >
        Submit
      </Button>
      {current && (
        <Button
          variant="contained"
          fullWidth={true}
          type="submit"
          color="secondary"
          className={styles.editButton}
          onClick={clearAll}
        >
          Clear
        </Button>
      )}
    </form>
  );
};

export default ContactForm;
