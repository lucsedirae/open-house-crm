//* Dependencies
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

//* Material UI components, hooks, and icons
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CustomizedDialogs from '../modals/MapModal';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

//* State context
import InventoryContext from '../../context/inventory/inventoryContext';

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

export const InventoryItem = ({ inventory }) => {
  //* Initializes styling classes
  const classes = useStyles();

  //* Initiallizes state
  const inventoryContext = useContext(InventoryContext);
  const { deleteInventory, setCurrent, clearCurrent } = inventoryContext;

  const { _id, name, purchased, location, cost, value, status } = inventoryItem;

  const onDelete = () => {
    deleteInventory(_id);
    clearCurrent();
  };

  const onClick = () => {
    handleOpen();
    setCurrent(inventoryItem);
  };

  return (
    <Card id='contact-card' className={classes.root}>
      <CardContent>
        <Typography variant='h5' className={classes.title}>
          {name}{' '}
        </Typography>

        <Box className={classes.Box} style={{ textAlign: 'center' }}>
          {purchased && (
            <Typography variant='body1' className={classes.title}>
              {purchased}
            </Typography>
          )}
        </Box>
      </CardContent>
      <CardActions style={{ justifyContent: 'center' }}>
        <Button
          startIcon={<EditIcon />}
          color='primary'
          onClick={onClick}
          variant='outlined'
        >
          Edit
        </Button>
        <Button
          startIcon={<DeleteIcon />}
          color='secondary'
          onClick={onDelete}
          variant='outlined'
        >
          Delete
        </Button>
        <CustomizedDialogs inventoryItem={inventoryItem} />
      </CardActions>
    </Card>
  );
};

export default InventoryItem;
