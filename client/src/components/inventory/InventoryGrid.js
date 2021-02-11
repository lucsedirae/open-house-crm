//* Dependencies
import React, { Fragment, useState } from 'react';
import Moment from 'moment';

//* Material-UI components, hooks, and icons
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { DataGrid } from '@material-ui/data-grid';

//* Custom components
import Spinner from '../layout/Spinner';
import InventoryItem from '../inventory/InventoryItem';

const columns = [
  { field: 'name', headerName: 'Name', width: 130 },
  {
    field: 'purchased',
    type: 'date',
    headerName: 'Purchased',
    width: 120,
  },
  { field: 'location', headerName: 'Location', flex: 0.2 },
  { field: 'cost', headerName: 'Cost', flex: 0.2 },
  { field: 'value', headerName: 'Value', flex: 0.2 },
  { field: 'status', headerName: 'Status', flex: 0.2 },
];

const InventoryGrid = ({
  inventoryLst,
  deleteInventory,
  currentInv,
  setCurrentInv,
}) => {
  const [selectedInvId, setSelectedInvId] = useState(null);
  //const [currentInv, setCurrentInv] = useState(null);

  const findCurrentInv = (id) => {
    inventoryLst.map((inventoryItem) => {
      if (inventoryItem._id == id) {
        setCurrentInv(inventoryItem);
      }
    });
  };

  //* Returns JSX to DOM if inventory is empty
  if (inventoryLst !== null && inventoryLst.length === 0) {
    return (
      <Typography variant='h4' align='center' style={{ marginTop: '3rem' }}>
        Inventory List is Empty!
      </Typography>
    );
  }

  //* Returns JSX to DOM if inventory is not empty
  return (
    <Fragment>
      {currentInv !== null ? (
        <Fragment>
          <InventoryItem
            selectedInvId={selectedInvId}
            inventoryItem={currentInv}
            deleteInventory={deleteInventory}
          />
        </Fragment>
      ) : (
        <Typography align='center' variant='h5'>
          Please Select inventory
        </Typography>
      )}

      {inventoryLst !== null ? (
        <Box style={{ height: 475, width: '75%', margin: '0 auto' }}>
          <DataGrid
            rows={inventoryLst.map((inventoryItem) => ({
              id: inventoryItem._id,
              name: inventoryItem.name,
              purchased: Moment(inventoryItem.purchased).format('MM/DD/YYYY'),
              cost: '$' + inventoryItem.cost,
              location: inventoryItem.location,
              value: '$' + inventoryItem.value,
              status: inventoryItem.status,
            }))}
            columns={columns}
            pageSize={10}
            density='compact'
            onSelectionChange={(newSelection) => {
              //setSelectedInv(newSelection.rowIds);
              findCurrentInv(newSelection.rowIds);
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
