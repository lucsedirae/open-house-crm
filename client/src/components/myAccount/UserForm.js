//* Dependencies
import React, { Fragment } from "react";

//* Material-UI components, hooks, and icons
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

//* Defines styles to be served via makeStyles MUI hook
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    marginBottom: "1rem",
  },
  header: {
    textAlign: "center",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
}));

//* Exported component
const UserForm = () => {
  //* Initializes styling classes
  const classes = useStyles();

  //* Handles form submit
  const onSubmit = () => {

  }

  //* Returns JSX to DOM
  return (
    <Fragment>
      <form className={classes.root} onSubmit={onSubmit}>
        <TextField variant="outlined" label="Name" size="small" /><br/>
        <TextField variant="outlined" label="Email" size="small" /><br/>
        <TextField variant="outlined" label="Company" size="small" /><br/>
        <TextField variant="outlined" label="Address" size="small" /><br/>
        <TextField variant="outlined" label="Address2" size="small"/><br/>
      <Button
        variant="contained"
        type="submit"
        color="primary"
        style={{ marginTop: "1rem" }}
      >
        Submit
      </Button>

      </form>
    </Fragment>
  );
};

export default UserForm;
