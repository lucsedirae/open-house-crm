//* Dependencies
import React, { useContext } from "react";
import Moment from "moment";
import styles from "./inventory.module.css";

//* Material UI components, hooks, and icons
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

//* State context
import InventoryContext from "../../context/inventory/inventoryContext";
import ModalContext from "../../context/modal/modalContext";

//* Exported component
const InventoryItem = ({ inventoryItem, deleteInventory }) => {
  //* Initiallizes state
  const inventoryContext = useContext(InventoryContext);
  const { setCurrent } = inventoryContext;

  const modalContext = useContext(ModalContext);
  const { handleOpen } = modalContext;

  const onDelete = () => {
    deleteInventory(inventoryItem);
  };

  const onClick = () => {
    handleOpen();
    setCurrent(inventoryItem);
  };

  //* Returns JSX to DOM
  return (
    <Container style={{ padding: "3rem" }}>
      <Grid container spacing={0} align="center" justify="center">
        <Grid xs={12} sm={12} md={8}>
          <Paper className={styles.paper}>
            <Typography align="center" variant="h5" className={styles.title}>
              {inventoryItem.name}{" "}
            </Typography>
            <Divider />
            <br />
            <Grid container spacing={0} align="center" justify="center">
              <Grid xs={12} sm={3} md={3}>
                {inventoryItem.purchased && (
                  <Typography className={styles.label}>
                    Purchased:{" "}
                    {Moment(inventoryItem.purchased).format("MM/DD/YYYY")}
                  </Typography>
                )}
                {inventoryItem.location && (
                  <Typography className={styles.label}>
                    Location: {inventoryItem.location}
                  </Typography>
                )}
              </Grid>
              <Grid xs={12} sm={3} md={3}>
                {inventoryItem.cost && (
                  <Typography className={styles.label}>
                    Cost: ${inventoryItem.cost}
                  </Typography>
                )}
                {inventoryItem.value && (
                  <Typography className={styles.label}>
                    Value: ${inventoryItem.value}
                  </Typography>
                )}
              </Grid>
              {inventoryItem.status && (
                <Typography className={styles.label}>
                  Status: {inventoryItem.status}
                </Typography>
              )}
            </Grid>
            <Button
              startIcon={<EditIcon />}
              onClick={onClick}
              variant="contained"
              size="small"
              className={styles.button}
            >
              Edit
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              color="secondary"
              onClick={onDelete}
              variant="contained"
              size="small"
              className={styles.button}
            >
              Delete
            </Button>
            <br />
            <Divider />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InventoryItem;
