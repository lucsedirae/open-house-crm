//* Dependencies
import React, { useState, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

//* Material UI components, hooks, and icons
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

//*Custom components & data imports
import statesUS from "./stateField.json";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const classes = useStyles();

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
  } = contact;

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    contactContext.addContact(contact);
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
    });
  };

  return (
    <form className={classes.root} autoComplete="off" onSubmit={onSubmit}>
      <Typography variant="h5">Add Contact</Typography>
      <Box>
        {/* These TextFields are repetitive and could be componentized then mapped across the contact object to reduce line count */}
        <TextField
          variant="outlined"
          required
          type="text"
          id="standard-required"
          label="Name"
          size="small"
          name="name"
          value={name}
          onChange={onChange}
        />

        <TextField
          variant="outlined"
          label="Email"
          type="email"
          size="small"
          name="email"
          value={email}
          onChange={onChange}
        />

        <TextField
          variant="outlined"
          label="Phone"
          type="phone"
          size="small"
          name="phone"
          value={phone}
          onChange={onChange}
        />

        <TextField
          variant="outlined"
          label="Street Number"
          type="number"
          size="small"
          name="streetNumber"
          value={streetNumber}
          onChange={onChange}
        />

        <TextField
          variant="outlined"
          label="Street"
          type="text"
          size="small"
          name="street"
          value={street}
          onChange={onChange}
        />

        <TextField
          variant="outlined"
          label="Additional Address"
          type="text"
          size="small"
          name="address2"
          value={address2}
          onChange={onChange}
        />

        <TextField
          variant="outlined"
          label="City"
          size="small"
          type="text"
          name="city"
          value={city}
          onChange={onChange}
        />

        <TextField
          variant="outlined"
          label="State"
          type="text"
          size="small"
          name="state"
          select
          value={state}
          onChange={onChange}
        >
          {statesUS.map((abbr) => (
            <MenuItem key={abbr} value={abbr}>
              {abbr}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          variant="outlined"
          label="Zip"
          type="number"
          size="small"
          name="zipcode"
          value={zipcode}
          onChange={onChange}
        />

        <TextField
          variant="outlined"
          label="Contact Type"
          size="small"
          name="type"
          select
          value={type}
          onChange={onChange}
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

        <Typography variant="body1">* indicates a required field</Typography>
      </Box>
      <Button
        variant="contained"
        type="submit"
        color="primary"
        style={{ marginTop: "1rem" }}
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
