//* Dependencies
import React, { useContext } from 'react';
import Moment from 'moment';

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

export const InventoryItem = ({
  selectedInvId,
  inventoryItem,
  deleteInventory,
}) => {
  //* Initializes styling classes
  const classes = useStyles();

  //* Initiallizes state
  const inventoryContext = useContext(InventoryContext);
  const { clearCurrent, setCurrent } = inventoryContext;

  const modalContext = useContext(ModalContext);
  const { handleOpen } = modalContext;

  const onDelete = () => {
    deleteInventory(inventoryItem);
    clearCurrent();
  };

  const onClick = () => {
    handleOpen();
    setCurrent(inventoryItem);
  };

  return (
    <Card id='contact-card' className={classes.root} align='center'>
      <CardContent>
        <Box textAlign='center' className={classes.Box}>
          <Typography variant='h5' className={classes.title}>
            {inventoryItem.name}{' '}
          </Typography>
        </Box>

        <Box className={classes.Box} style={{ textAlign: 'center' }}>
          {inventoryItem.purchased && (
            <Typography variant='body1' className={classes.address}>
              Purchased: {Moment(inventoryItem.purchased).format('MM/DD/YYYY')}
            </Typography>
          )}
          {inventoryItem.location && (
            <Typography variant='body1' className={classes.address}>
              Location: {inventoryItem.location}
            </Typography>
          )}
          {inventoryItem.cost && (
            <Typography variant='body1' className={classes.address}>
              Cost: ${inventoryItem.cost}
            </Typography>
          )}
          {inventoryItem.value && (
            <Typography variant='body1' className={classes.address}>
              Value: ${inventoryItem.value}
            </Typography>
          )}
          {inventoryItem.status && (
            <Typography variant='body1' className={classes.address}>
              Status: {inventoryItem.status}
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
