//* Dependencies
import React, { useState, useContext, useEffect } from 'react';

//* Material-UI components, hooks, and icons
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

// Material UI Date Picker
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

//* State context
import InventoryContext from '../../context/inventory/inventoryContext';

//* Defines styles to be served via makeStyles MUI hook
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
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
const InventoryForm = ({ handleClose }) => {
  //* Initializes styling classes
  const classes = useStyles();

  //*Initializes context state
  const inventoryContext = useContext(InventoryContext);
  const {
    addInventory,
    updateInventory,
    clearCurrent,
    current,
  } = inventoryContext;

  useEffect(() => {
    if (current !== null) {
      setInventory(current);
    } else {
      setInventory({
        name: '',
        purchased: new Date(),
        location: '',
        cost: '',
        value: '',
        status: '',
      });
    }
  }, [inventoryContext, current]);

  const [inventory, setInventory] = useState({
    name: '',
    purchased: '',
    location: '',
    cost: '',
    value: '',
    status: '',
  });

  const { name, purchased, location, cost, value, status } = inventory;

  const onChange = (e) => {
    setInventory({ ...inventory, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addInventory(inventory);
    } else {
      updateInventory(inventory);
    }

    setInventory({
      name: '',
      purchased: '',
      location: '',
      cost: '',
      value: '',
      status: '',
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = useState(new Date());

  //does this change need to change to some other state hook to set the selected date
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <form className={classes.root} autoComplete='off' onSubmit={onSubmit}>
      <Typography variant='h5' style={{ textAlign: 'center' }}>
        {current ? 'Edit Inventory' : 'Add Inventory'}
      </Typography>

      <Box style={{ textAlign: 'center' }}></Box>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Box>
          {/* Name Field */}
          <TextField
            variant='outlined'
            required
            type='text'
            id='standard-required'
            label='Inventory'
            size='small'
            helperText='Required'
            name='name'
            value={name}
            onChange={onChange}
          />
          {/* Purchase date, Date */}
          <KeyboardDatePicker
            margin='normal'
            id='date-picker-dialog'
            label='Purchased Date'
            format='MM/dd/yyyy'
            value={purchased}
            name='purchased'
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          {/* Location, string */}
          <TextField
            variant='outlined'
            required
            type='text'
            id='standard'
            label='Inventory Location'
            size='small'
            // helperText="Required"
            name='location'
            value={location}
            onChange={onChange}
          />

          {/* Cost, number */}
          <FormControl className={classes.margin}>
            <InputLabel htmlFor='standard-adornment-amount'>Costs</InputLabel>
            <Input
              id='standard-adornment-amount'
              name='cost'
              type='number'
              value={cost}
              onChange={onChange}
              startAdornment={
                <InputAdornment position='start'>$</InputAdornment>
              }
            />
          </FormControl>

          {/*  Value, number*/}

          <FormControl className={classes.margin}>
            <InputLabel htmlFor='standard-adornment-amount'>Value</InputLabel>
            <Input
              id='standard-adornment-amount'
              name='value'
              type='number'
              value={value}
              onChange={onChange}
              startAdornment={
                <InputAdornment position='start'>$</InputAdornment>
              }
            />
          </FormControl>

          {/*  Status, string*/}
          <TextField
            variant='outlined'
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
        </Box>
      </MuiPickersUtilsProvider>
      <Button
        variant='outlined'
        type='submit'
        color='primary'
        fullWidth={true}
        style={{ marginTop: '1rem', marginBottom: '1rem' }}
        onClick={handleClose}
      >
        Submit
      </Button>
      {current && (
        <Button
          variant='outlined'
          fullWidth={true}
          type='submit'
          color='secondary'
          style={{ marginBottom: '1rem' }}
          onClick={clearAll}
        >
          Clear
        </Button>
      )}
    </form>
  );
};

export default InventoryForm;
