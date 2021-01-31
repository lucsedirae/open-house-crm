import React from 'react';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 170 },
    { field: 'purchased', headerName: 'Purchased', width: 130 },
    { field: 'location', headerName: 'Location', width: 130 },
    {
      field: 'cost',
      headerName: 'Cost',
      type: 'number',
      width: 90,
    },
    {
        field: 'value',
        headerName: 'Value',
        type: 'number',
        width: 90,
      },
      { field: 'status', headerName: 'Status', width: 170 }
  ];
  
  const rows = [
    { id: 1, name: "Inventory 1", purchased: '1/28/2020', location: 'The House', cost: 350, value: 450, status: "status" },
    { id: 1, name: "Inventory 1", purchased: '1/28/2020', location: 'The House', cost: 350, value: 450, status: "status" },
    { id: 1, name: "Inventory 1", purchased: '1/28/2020', location: 'The House', cost: 350, value: 450, status: "status" },
    { id: 1, name: "Inventory 1", purchased: '1/28/2020', location: 'The House', cost: 350, value: 450, status: "status" }
  ];

const InventoryGrid = () => {
    
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
    )
}

export default InventoryGrid
