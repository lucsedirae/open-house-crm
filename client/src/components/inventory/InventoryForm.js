//* Dependencies
import React, { useState, useContext, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import Moment from 'moment';

//* Material-UI components, hooks, and icons
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from '@material-ui/core/InputLabel';

//* State context
import InventoryContext from "../../context/inventory/inventoryContext";

//* Defines styles to be served via makeStyles MUI hook
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

//* Exported Component
const InventoryForm = ({
  handleClose,
  updateInventory,
  clearCurrent,
  addInventory,
}) => {
  //* Initializes styling classes
  const classes = useStyles();

  const { addToast } = useToasts();

  //*Initializes context state
  const inventoryContext = useContext(InventoryContext);
  const { current, setCurrent } = inventoryContext;

  useEffect(() => {
    if (current !== null) {
      setInventory(current);
    } else {
      setInventory({
        name: "",
        purchased: new Date(),
        location: "",
        cost: "",
        value: "",
        status: ""
      });
    }
  }, [inventoryContext, current]);

  const [inventory, setInventory] = useState({
    name: "",
    purchased: new Date(),
    location: "",
    cost: "",
    value: "",
    status: ""
  });

  const { name, purchased, location, cost, value, status } = inventory;

  const onChange = (e) => {
    setInventory({ ...inventory, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addInventory(inventory);
      addToast("Inventory item saved!", {
        appearance: "success",
        autoDismiss: true
      });
    } else {
      updateInventory(inventory);
      setCurrent(null);
      addToast("Inventory item updated!", {
        appearance: "success",
        autoDismiss: true
      });
    }

    setInventory({
      name: "",
      purchased: "",
      location: "",
      cost: "",
      value: "",
      status: ""
    });
  };

  return (
    <form className={classes.root} autoComplete="off" onSubmit={onSubmit}>
      <Typography variant="h5" style={{ textAlign: "center" }}>
        {current ? "Edit Inventory" : "Add Inventory"}
      </Typography>
      <Box style={{ textAlign: 'center' }}>
        {/* Name Field */}
        <TextField
          variant='standard'
          required={true}
          type='text'
          id='standard-required'
          label='Inventory'
          size='small'
          helperText='Required'
          name='name'
          value={name}
          onChange={onChange}
        />
        {/* Location, string */}
        <TextField
          variant='standard'
          required
          type='text'
          id='standard'
          label='Location'
          size='small'
          name='location'
          value={location}
          onChange={onChange}
        />
        {/* Cost, number */}
        <TextField
          variant='standard'
          label='Cost'
          type='number'
          size='small'
          name='cost'
          value={cost}
          onChange={onChange}
        />
        {/*  Value, number*/}
        <TextField
          variant='standard'
          label='Value'
          type='number'
          size='small'
          name='value'
          value={value}
          onChange={onChange}
        />
        {/*  Status, string*/}
        <TextField
          variant='standard'
          required
          type='text'
          id='standard'
          label='Status'
          size='small'
          // helperText="Required"
          name='status'
          value={status}
          onChange={onChange}
        />
        {/* Purchase date, Date */}
        <InputLabel>Purchased</InputLabel>
        <TextField
          variant='standard'
          type='date'
          size='small'
          name='purchased'
          value={Moment(purchased).format('YYYY-MM-DD')}
          onChange={onChange}
        />
      </Box>
      <Button
        variant="outlined"
        type="submit"
        color="primary"
        fullWidth={true}
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
        onClick={handleClose}
      >
        Submit
      </Button>
    </form>
  );
};

export default InventoryForm;
