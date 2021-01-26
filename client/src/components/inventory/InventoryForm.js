//* Dependencies
import React, { useState, useContext, useEffect } from "react";

//* Material-UI components, hooks, and icons
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
// npm i @date-io/date-fns@1.x date-fns
//npm i @material-ui/pickers
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

//* State context
import InventoryContext from "../../context/inventory/inventoryContext";


//* Defines styles to be served via makeStyles MUI hook
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

// Exported Component
const InventoryForm = () => {
  //* Initializes styling classes
  const classes = useStyles();

  const inventoryContext = useContext(InventoryContext);
  const { addInventory, updateInventory, clearCurrent, current } = inventoryContext;

  useEffect(() => {
    if (current !== null) {
      setInventory(current);
    } else {
      setInventory({
        name: "",
        purchased: "",
        location: "",
        cost: "",
        value: "",
        status: ""
      });
    }
  }, [inventoryContext, current]);

  const [inventoryItem, setInventory] = useState({
    name: "",
    purchased: "",
    location: "",
    cost: "",
    value: "",
    status: ""
  });

  const {
    name,
    purchased,
    location,
    cost,
    value,
    status
  } = inventoryItem;

  const onChange = (e) => {
    setInventory({ ...inventoryItem, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addInventory(inventoryItem);
    } else {
      updateInventory(inventoryItem);
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

  const clearAll = () => {
    clearCurrent();
  };

   // The first commit of Material-UI
   const [selectedDate, setSelectedDate] = React.useState(new Date(Date.now));

   const handleDateChange = (date) => {
     setSelectedDate(date);
   };



  return (
    <form className={classes.root} autoComplete="off" onSubmit={onSubmit}>
      <Typography variant="h5">
        {current ? "Edit Contact" : "Add Contact"}
      </Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Box>
          {/* Name Field */}
          <TextField
            variant="outlined"
            required
            type="text"
            id="standard-required"
            label="Inventory Item"
            size="small"
            helperText="Required"
            name="name"
            value={name}
            onChange={onChange}
          />
          {/* Purchase date, Date */}
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date"
            format="MM/dd/yyyy"
            value={purchased}
            name="purchased"
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          {/* Location, string */}
          <TextField
            variant="outlined"
            required
            type="text"
            id="standard-required"
            label="Inventory Location"
            size="small"
            helperText="Required"
            name="location"
            value={location}
            onChange={onChange}
          />

          {/* Cost, number */}


          {/*  Value, number*/}


          {/*  Status, string*/}
          <TextField
            variant="outlined"
            required
            type="text"
            id="standard-required"
            label="status"
            size="small"
            helperText="Required"
            name="status"
            value={status}
            onChange={onChange}
          />

        </Box>
      </MuiPickersUtilsProvider>
    </form>
  );
};

export default InventoryForm;
