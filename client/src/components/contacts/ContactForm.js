//* Dependencies
import React, { useState, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

//* Material UI components, hooks, and icons
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

//*Custom components
import StatesUS from "../contacts/StatesUS";

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
    address: {
      streetNumber: null,
      street: null,
      address2: null,
      city: null,
      state: null,
      zipcode: null,
    },
    type: "client",
  });

  const { name, email, phone, address,  type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    contactContext.addContact(contact);
    setContact({
      name: "",
      email: "",
      phone: "",
      address: {
        streetNumber: "",
        street: "",
        address2: "",
        city: "",
        state: "",
        zipcode: "",
      },
      type: "client",
    });
  };

  return (
    <form className={classes.root} autoComplete="off" onSubmit={onSubmit}>
      <Typography variant="h5">Add Contact</Typography>
      <div>
        {/* These TextFields are repetitive and could be componentized then mapped across the contact object to reduce line count */}
        <TextField
          variant="outlined"
          required
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
          size="small"
          name="streetNumber"
          value={address.streetNumber}
          onChange={onChange}
        />
        <TextField
          variant="outlined"
          label="Street"
          size="small"
          name="street"
          value={address.street}
          onChange={onChange}
        />
        <TextField
          variant="outlined"
          label="Additional Address"
          size="small"
          name="address2"
          value={address.address2}
          onChange={onChange}
        />
        <TextField
          variant="outlined"
          label="City"
          size="small"
          name="city"
          value={address.city}
          onChange={onChange}
        />
        <FormControl
          variant="outlined"
          size="small"
          className={classes.formControl}
          style={{ marginLeft: "85px" }}
        >
          <InputLabel id="demo-simple-select-outlined-label">State</InputLabel>
          <Select
            label="State"
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            name="state"
            value={address.state}
            onChange={onChange}
          >
            <StatesUS />
          </Select>
        </FormControl>

        <TextField
          variant="outlined"
          label="Zip"
          size="small"
          name="zipcode"
          value={address.zipcode}
          onChange={onChange}
        />
        <FormControl
          variant="outlined"
          size="small"
          className={classes.formControl}
          style={{ marginLeft: "85px" }}
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Contact Type
          </InputLabel>
          <Select
            required
            label="Select One"
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            name="type"
            value={type}
            onChange={onChange}
          >
            <MenuItem value={"Client"}>Client</MenuItem>
            <MenuItem value={"Vendor"}>Vendor</MenuItem>
            <MenuItem value={"Prospect"}>Prospect</MenuItem>
          </Select>
        </FormControl>
        <Typography variant="body1">* indicates a required field</Typography>
      </div>
      <Button variant="contained" type="submit" color="primary" style={{ marginTop: "1rem" }}>
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
