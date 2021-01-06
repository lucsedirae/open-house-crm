//* Dependencies
import React, { useState } from "react";

//* Material UI components, hooks, and icons
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const ContactForm = () => {
  const classes = useStyles();

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
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
    address,
    streetNumber,
    street,
    address2,
    city,
    state,
    zipcode,
    type,
  } = contact;

  return (
    <form className={classes.root} autoComplete="off">
      <Typography variant="h5">Add Contact</Typography>
      <div>
        <TextField
          variant="outlined"
          required
          id="standard-required"
          label="Name"
          size="small"
        />
        <TextField variant="outlined" label="Email" size="small" />
        <TextField variant="outlined" label="Phone" size="small" />
        <TextField
          variant="outlined"
          required
          id="standard-required"
          label="Contact Type"
          size="small"
        />
        <TextField variant="outlined" label="Street Number" size="small" />
        <TextField variant="outlined" label="Street" size="small" />
        <TextField variant="outlined" label="Additional Address" size="small" />
        <TextField variant="outlined" label="City" size="small" />
        <TextField variant="outlined" label="State" size="small" />
        <TextField variant="outlined" label="Zip" size="small" />
        <Typography variant="body1">* indicates a required field</Typography>
      </div>
      <Button variant="contained" color="primary" style={{ marginTop: "1rem" }}>
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
