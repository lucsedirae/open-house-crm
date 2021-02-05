//* Dependencies
import React, { useState, Fragment, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

//* Material UI components, hooks, and icons
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

//* State context
import InventoryContext from '../../context/inventory/inventoryContext';
import ModalContext from '../../context/modal/modalContext';

//* Axios
import axios from 'axios';

//* Defines styles to be served via makeStyles MUI hook
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: '1rem',
    backgroundColor: 'lightgrey',
    border: '1px solid grey',
    boxShadow: '0 8px 5px -3px grey',
    fontFamily: 'Oswald',
    fontWeight: '200',
  },
  title: {
    textAlign: 'center',
  },
  pos: {
    marginBottom: '1rem',
  },
  buttonGroup: {
    justifyContent: 'center',
  },
  Box: {
    marginTop: '1rem',
  },
});

export const InventoryItem = ({ selectedInv }) => {
  //* Initializes styling classes
  const classes = useStyles();

  //* Initiallizes state
  const inventoryContext = useContext(InventoryContext);
  const { deleteInventory, clearCurrent, setCurrent } = inventoryContext;
  const [inventory, setInventoryItem] = useState({});

  const modalContext = useContext(ModalContext);
  const { handleOpen } = modalContext;

  let inventoryArray = [];
  // let inventory = {};
  useEffect(() => {
    const findCurrentInv = async () => {
      const res = await axios.get('/api/inventory');

      inventoryArray = res.data;

      for (let i = 0; i < inventoryArray.length; i++) {
        if (inventoryArray[i]._id === selectedInv[0]) {
          setInventoryItem(inventoryArray[i]);
          // inventory = inventoryArray[i];
        }
      }
    };
    findCurrentInv();
  });

  const onDelete = () => {
    deleteInventory(inventory._id);
    clearCurrent();
  };

  const onClick = () => {
    handleOpen();
    setCurrent(inventory);
  };

  return (
    <Card id='contact-card' className={classes.root} align='center'>
      <CardContent>
        <Box textAlign='center' className={classes.Box}>
          <Typography variant='h5' className={classes.title}>
            {inventory.name}{' '}
          </Typography>
        </Box>

        <Box className={classes.Box} style={{ textAlign: 'center' }}>
          {inventory.purchased && (
            <Typography variant='body1' className={classes.address}>
              Purchased: {inventory.purchased}
            </Typography>
          )}
          {inventory.location && (
            <Typography variant='body1' className={classes.address}>
              Location: {inventory.location}
            </Typography>
          )}
          {inventory.cost && (
            <Typography variant='body1' className={classes.address}>
              Cost: ${inventory.cost}
            </Typography>
          )}
          {inventory.value && (
            <Typography variant='body1' className={classes.address}>
              Value: ${inventory.value}
            </Typography>
          )}
          {inventory.status && (
            <Typography variant='body1' className={classes.address}>
              Status: {inventory.status}
            </Typography>
          )}
        </Box>
      </CardContent>
      <CardActions style={{ justifyContent: 'center' }}>
        <Button
          startIcon={<EditIcon />}
          onClick={onClick}
          variant='contained'
          size='small'
          style={{
            backgroundColor: '#008B8B',
            color: 'white',
            fontSize: '15px',
            fontFamily: 'Big Shoulders Display',
            fontWeight: '600',
          }}
        >
          Edit
        </Button>
        <Button
          startIcon={<DeleteIcon />}
          color='secondary'
          onClick={onDelete}
          variant='contained'
          size='small'
          style={{
            backgroundColor: '#008B8B',
            color: 'white',
            fontSize: '15px',
            fontFamily: 'Big Shoulders Display',
            fontWeight: '600',
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default InventoryItem;
