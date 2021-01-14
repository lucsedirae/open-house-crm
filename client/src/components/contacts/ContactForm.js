//* Dependencies
import React, { useState, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

//* Material UI components, hooks, and icons
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import ListSubheader from "@material-ui/core/ListSubheader";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
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

    console.log("You did it!" + contact);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    contactContext.addContact(contact);
    setContact([
      {
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
      },
    ]);
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
          value={streetNumber}
          onChange={onChange}
        />
        <TextField
          variant="outlined"
          label="Street"
          size="small"
          name="street"
          value={street}
          onChange={onChange}
        />
        <TextField
          variant="outlined"
          label="Additional Address"
          size="small"
          name="address2"
          value={address2}
          onChange={onChange}
        />
        <TextField
          variant="outlined"
          label="City"
          size="small"
          name="city"
          value={city}
          onChange={onChange}
        />
        <FormControl
          variant="outlined"
          size="small"
          className={classes.formControl}
          style={{ marginLeft: "85px" }}
          value=""
          open={false}
        >
          <InputLabel id="demo-simple-select-outlined-label">State</InputLabel>
          <Select
            label="State"
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            name="state"
            defaultValue=""
            value={state}
            onChange={onChange}
          >
            <ListSubheader open="true">US States </ListSubheader>
            {statesUS.map((state) => (
              <MenuItem value={state}>{state}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          variant="outlined"
          label="Zip"
          size="small"
          name="zipcode"
          value={zipcode}
          onChange={onChange}
        />
        <FormControl
          variant="outlined"
          size="small"
          className={classes.formControl}
          style={{ marginLeft: "85px" }}
          open={false}
          value=""
        >
          <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
          <Select
            required
            label="Select One"
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            name="type"
            defaultValue="Client"
            value={type}
            onChange={onChange}
          >
            <MenuItem key="client" value={"Client"}>
              Client
            </MenuItem>
            <MenuItem key="vendor" value={"Vendor"}>
              Vendor
            </MenuItem>
            <MenuItem key="prospect" value={"Prospect"}>
              Prospect
            </MenuItem>
          </Select>
        </FormControl>
        <Typography variant="body1">* indicates a required field</Typography>
      </div>
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
