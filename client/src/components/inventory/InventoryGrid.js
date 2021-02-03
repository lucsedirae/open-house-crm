//* Dependencies
import React, { Fragment, useContext, useEffect, useState } from 'react';
import '../../App.css';

//* Material-UI components, hooks, and icons
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { DataGrid } from '@material-ui/data-grid';

//* Custom components
import Spinner from '../layout/Spinner';
import InventoryItem from '../inventory/InventoryItem';

//* State context
import InventoryContext from '../../context/inventory/inventoryContext';

const columns = [
  { field: 'invName', headerName: 'Name', width: 170 },
  { field: 'purchased', headerName: 'Purchased', width: 130 },
  { field: 'location', headerName: 'Location', width: 130 },
  { field: 'cost', headerName: 'Cost', width: 130 },
  { field: 'value', headerName: 'Value', width: 130 },
  { field: 'status', headerName: 'Status', width: 170 },
];

// const rows = [
//   { id: 1, name: "Inventory 1", purchased: '1/28/2020', location: 'The House', cost: 350, value: 450, status: "status" },
//   { id: 1, name: "Inventory 1", purchased: '1/28/2020', location: 'The House', cost: 350, value: 450, status: "status" },
//   { id: 1, name: "Inventory 1", purchased: '1/28/2020', location: 'The House', cost: 350, value: 450, status: "status" },
//   { id: 1, name: "Inventory 1", purchased: '1/28/2020', location: 'The House', cost: 350, value: 450, status: "status" }
// ];

const InventoryGrid = () => {
  const inventoryContext = useContext(InventoryContext);
  const [selectedInv, setSelectedInv] = useState(null);

  const { inventory, getInventory, loading, setCurrent } = inventoryContext;
  //console.log(inventory);

  //* Gets inventory from MongoDB
  useEffect(() => {
    getInventory();
    // eslint-disable-next-line
  }, []);

  //* Returns JSX to DOM if inventory is empty
  if (inventory !== null && inventory.length === 0 && !loading) {
    return (
      <Typography variant='h4' align='center' style={{ marginTop: '3rem' }}>
        Inventory List is Empty!
      </Typography>
    );
  }

  //* Returns JSX to DOM if inventory is not empty
  return (
    <Fragment>
      {selectedInv !== null ? (
        <Fragment>
          <h1>{selectedInv}</h1>
          <InventoryItem selectedInv={selectedInv} />
        </Fragment>
      ) : (
        <h1>Select inventory</h1>
      )}

      {inventory !== null && !loading ? (
        <Box style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={inventory.map((inventoryItem) => ({
              id: inventoryItem._id,
              incName: inventoryItem.invName,
              purchased: inventoryItem.purchased,
              cost: inventoryItem.cost,
              location: inventoryItem.location,
              cost: inventoryItem.cost,
              value: inventoryItem.value,
              status: inventoryItem.status,
            }))}
            columns={columns}
            pageSize={10}
            density='compact'
            onSelectionChange={(newSelection) => {
              setSelectedInv(newSelection.rowIds);
            }}
          />
        </Box>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default InventoryGrid;
