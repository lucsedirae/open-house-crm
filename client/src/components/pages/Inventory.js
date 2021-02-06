//* Dependencies
import React, { useEffect, useContext, useState } from 'react';
import '../../App.css';
import axios from 'axios';

//* Material-UI components, hooks, and icons
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

//* Custom components
// import InventoryForm from '../inventory/InventoryForm';
import InventoryGrid from '../inventory/InventoryGrid';
// import InventoryItem from '../inventory/InventoryItem';
import InventoryFormModal from '../inventory/InventoryFormModal';
import NavPanel from '../layout/NavPanel';

//* State context
import AuthContext from '../../context/auth/authContext';
// import InventoryContext from '../../context/inventory/inventoryContext';

//* Defines styles to be served via makeStyles MUI hook
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    marginBottom: '1rem',
  },
  header: {
    textAlign: 'center',
    marginTop: '4rem',
    marginBottom: '1rem',
    fontFamily: 'Oswald',
    fontWeight: '500',
  },
}));

//* Exported component
const Inventory = () => {
  //* Initializes styling classes
  const classes = useStyles();

  //* Initializes state
  const authContext = useContext(AuthContext);
  const [inventoryLst, setInventory] = useState([]);
  // const inventoryContext = useContext(InventoryContext);

  //*TODO funcionize Axios calls to do crud operations on inventory and then prop drill down
  //* Retrieves inventory from MongoDB
  const getInventory = async () => {
    const res = await axios.get('/api/inventory');
    const data = res.data;
    setInventory(data);
  };

  const updateInventory = async (inventoryId) => {
    const res = await axios.put('/api/inventory/' + inventoryId);
    const data = res.data;
    console.log(data);
  };

  //* Authenticates user token and retrieves inventory list
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
    getInventory();
  }, []);

  //*Returns JSX to DOM if inventory is not empty
  return (
    <Container>
      <Typography variant='h4' className={classes.header}>
        Inventory
      </Typography>
      <Grid container spacing={3} alignItems='center' justify='center'>
        <Grid item xs={12} sm={12} md={8} align='center'>
          <NavPanel />
        </Grid>
      </Grid>
      <InventoryGrid inventoryLst={inventoryLst} />
      <InventoryFormModal updateInventory={updateInventory} />
    </Container>
  );
};

export default Inventory;
