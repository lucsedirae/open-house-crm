//* Dependencies
import React from "react";

//* Material-UI components, hooks, and icons
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";


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


const onSubmit = (e) => {
  e.preventDefault();
  // if () {
  //   console.log("working");
  // } else {
  //   console.log("working");
  // }

};

//* Exported component
const InventoryForm = () => {

  //* Initializes styling classes
  const classes = useStyles();


  return (
    <form className={classes.root} autoComplete="off" onSubmit={onSubmit}>
      <Typography variant="h4">Inventory item form</Typography>
    </form>
  );
};

export default InventoryForm;
