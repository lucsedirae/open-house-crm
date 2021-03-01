//* Dependencies
import React, { Fragment } from "react";

//* Material-UI components, hooks, and icons
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

//* Exported component
const UserForm = () => {
  //* Handles form submit
  const onSubmit = () => {};

  //* Returns JSX to DOM
  return (
    <Fragment>
      <form style={{ flexGrow: "1" }} onSubmit={onSubmit}>
        <TextField variant="outlined" label="Name" size="small" />
        <br />
        <TextField variant="outlined" label="Email" size="small" />
        <br />
        <TextField variant="outlined" label="Company" size="small" />
        <br />
        <TextField variant="outlined" label="Address" size="small" />
        <br />
        <TextField variant="outlined" label="Address2" size="small" />
        <br />
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
