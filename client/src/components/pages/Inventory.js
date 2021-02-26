//* Dependencies
import React, { useEffect, useContext, useState } from "react";
import "../../App.css";
import axios from "axios";

//* Material-UI components, hooks, and icons
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

//* Custom components
import InventoryGrid from "../inventory/InventoryGrid";
import InventoryFormModal from "../inventory/InventoryFormModal";
import NavPanel from "../layout/NavPanel";

//* State context
import AuthContext from "../../context/auth/authContext";

//* Exported component
const Inventory = () => {
  //* Initializes state
  const authContext = useContext(AuthContext);
  const [inventoryLst, setInventory] = useState([]);

  //* Funcionized Axios calls to do crud operations on inventory and then prop drill down
  //* Retrieves inventory from MongoDB
  const getInventory = async () => {
    const res = await axios.get("/api/inventory");
    const data = res.data;
    setInventory(data);
  };

  const addInventory = async (inventory) => {
    const res = await axios.post("/api/inventory", inventory);
    getInventory();
  };

  const updateInventory = async (inventory) => {
    const res = await axios.put(`/api/inventory/${inventory._id}`, inventory);
    const data = res.data;
    getInventory();
    setCurrentInv(inventory);
  };

  const deleteInventory = async (inventoryItem) => {
    const res = await axios.delete(`/api/inventory/${inventoryItem._id}`);
    clearCurrent();
    inventoryItem = {
      name: "",
      purchased: "",
      location: "",
      cost: "",
      value: "",
      status: "",
    };
    getInventory();
  };

  const [currentInv, setCurrentInv] = useState(null);

  const clearCurrent = () => {
    setCurrentInv(null);
  };

  //* Authenticates user token and retrieves inventory list
  useEffect(() => {
    authContext.loadUser();
    getInventory();
  }, []);

  //*Returns JSX to DOM if inventory is not empty
  return (
    <Container>
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          style={{ marginTop: "5rem" }}
          align="center"
        >
          <NavPanel />
        </Grid>
      </Grid>
      <InventoryGrid
        inventoryLst={inventoryLst}
        deleteInventory={deleteInventory}
        clearCurrent={clearCurrent}
        currentInv={currentInv}
        setCurrentInv={setCurrentInv}
      />
      <InventoryFormModal
        updateInventory={updateInventory}
        clearCurrent={clearCurrent}
        addInventory={addInventory}
        currentInv={currentInv}
      />
    </Container>
  );
};

export default Inventory;
