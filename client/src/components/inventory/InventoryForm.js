//* Dependencies
import React, { useState, useContext, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import Moment from "moment";
import styles from "./inventory.module.css";

//* Material-UI components, hooks, and icons
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

//* State context
import InventoryContext from "../../context/inventory/inventoryContext";

//* Exported Component
const InventoryForm = ({ handleClose, updateInventory, addInventory }) => {
  const { addToast } = useToasts();

  //*Initializes context state
  const inventoryContext = useContext(InventoryContext);
  const { current, setCurrent } = inventoryContext;

  useEffect(() => {
    if (current !== null) {
      setInventory(current);
    } else {
      setInventory({
        name: "",
        purchased: new Date(),
        location: "",
        cost: "",
        value: "",
        status: "",
      });
    }
  }, [inventoryContext, current]);

  const [inventory, setInventory] = useState({
    name: "",
    purchased: new Date(),
    location: "",
    cost: "",
    value: "",
    status: "",
  });

  const { name, purchased, location, cost, value, status } = inventory;

  const onChange = (e) => {
    setInventory({ ...inventory, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addInventory(inventory);
      addToast("Inventory item saved!", {
        appearance: "success",
        autoDismiss: true,
      });
    } else {
      updateInventory(inventory);
      setCurrent(null);
      addToast("Inventory item updated!", {
        appearance: "success",
        autoDismiss: true,
      });
    }

    setInventory({
      name: "",
      purchased: "",
      location: "",
      cost: "",
      value: "",
      status: "",
    });
  };

  //* Returns JSX to DOM
  return (
    <form className={styles.root} autoComplete="off" onSubmit={onSubmit}>
      <Typography variant="h5" style={{ textAlign: "center" }}>
        {current ? "Edit Inventory" : "Add Inventory"}
      </Typography>
      <Grid container>
        <Grid item xs={12} md={6}>
          {/* Name Field */}
          <TextField
            variant="standard"
            required={true}
            type="text"
            id="standard-required"
            label="Inventory"
            size="small"
            helperText="Required"
            name="name"
            value={name}
            onChange={onChange}
            className={styles.textField}
          />
          {/* Location, string */}
          <TextField
            variant="standard"
            required
            type="text"
            id="standard"
            label="Location"
            size="small"
            name="location"
            value={location}
            onChange={onChange}
            className={styles.textField}

          />
          {/* Purchase date, Date */}
          <InputLabel>Purchased</InputLabel>
          <TextField
            variant="standard"
            type="date"
            size="small"
            name="purchased"
            value={Moment(purchased).format("YYYY-MM-DD")}
            onChange={onChange}
            className={styles.textField}

          />
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Cost, number */}
          <TextField
            variant="standard"
            label="Cost"
            type="number"
            size="small"
            name="cost"
            value={cost}
            onChange={onChange}
            className={styles.textField}

          />
          {/*  Value, number*/}
          <TextField
            variant="standard"
            label="Value"
            type="number"
            size="small"
            name="value"
            value={value}
            onChange={onChange}
            className={styles.textField}

          />
          {/*  Status, string*/}
          <TextField
            variant="standard"
            required
            type="text"
            id="standard"
            label="Status"
            size="small"
            name="status"
            value={status}
            onChange={onChange}
            className={styles.textField}

          />
        </Grid>
      </Grid>
      <Button
        variant="outlined"
        type="submit"
        color="primary"
        fullWidth={true}
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
        onClick={handleClose}
      >
        Submit
      </Button>
    </form>
  );
};

export default InventoryForm;
