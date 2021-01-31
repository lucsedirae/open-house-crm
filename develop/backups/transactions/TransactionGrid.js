//* Dependencies
import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";

//* Material UI components, hooks, and icons
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from '@material-ui/data-grid';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import FaceIcon from "@material-ui/icons/Face";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import PhoneIcon from "@material-ui/icons/Phone";

//* State context
import TransactionContext from "../../context/transactions/transactionContext";
import ModalContext from "../../context/modal/modalContext";

//* Defines styles to be served via makeStyles MUI hook
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: "1rem",
    backgroundColor: "lightgrey",
    border: "1px solid grey",
    boxShadow: "0 8px 5px -3px grey",
    fontFamily: "Oswald",
    fontWeight: "200"
  },
  title: {
    textAlign: "center"
  },
  pos: {
    marginBottom: "1rem"
  },
  buttonGroup: {
    justifyContent: "center"
  },
  Box: {
    marginTop: "1rem"
  }
});

//* Checks the transaction type and returns the appropriate badge background color
const typeCheck = (type) => {
  switch (type) {
    case "vendor":
      return "lightgreen";
    case "client":
      return "lightblue";
    default:
      return "yellow";
  }
};

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
];

//* Exported component
export const TransactionGrid = ({ transaction }) => {
  //* Initializes styling classes
  const classes = useStyles();

  //* Initiallizes state
  const transactionContext = useContext(TransactionContext);
  const { deleteTransaction, setCurrent, clearCurrent } = transactionContext;

  const {
    _id,
    trxName,
    streetNumber,
    cost,
    revenue,
    street,
    address2,
    city,
    state,
    zipcode,
    type
  } = transaction;

  const modalContext = useContext(ModalContext);
  const { handleOpen } = modalContext;

  const onDelete = () => {
    deleteTransaction(_id);
    clearCurrent();
  };

  const onClick = () => {
    handleOpen();
    setCurrent(transaction);
  };

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  //* Returns JSX to DOM
  return (
<Fragment>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>

    <Card id="transaction-card" className={classes.root}>
      <CardContent>
        <Typography variant="h5" className={classes.title}>
          {trxName}{" "}
          <Chip
            size="small"
            label={type}
            // label={type.charAt(0).toUpperCase() + type.slice(1)}
            style={{ background: typeCheck(type) }}
            icon={<FaceIcon size="small" />}
          />
        </Typography>
        <Typography>Cost: {cost}</Typography>
        <Typography>Revenue: {revenue}</Typography>
  
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button
          startIcon={<EditIcon />}
          color="primary"
          onClick={onClick}
          variant="outlined"
        >
          Edit
        </Button>
        <Button
          startIcon={<DeleteIcon />}
          color="secondary"
          onClick={onDelete}
          variant="outlined"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
    </Fragment>
  );
};

TransactionGrid.propTypes = {
  transaction: PropTypes.object.isRequired
};

export default TransactionGrid;
