//* Dependencies
import React, { useReducer } from "react";
import axios from "axios";
import inventoryReducer from "./inventoryReducer";

//* Action types
import {
    ADD_ITEM,
    CLEAR_INVENTORY,
    CLEAR_CURRENT_ITEM,
    CLEAR_INV_FILTER,
    INVENTORY_ERROR,
    DELETE_ITEM,
    FILTER_INVENTORY,
    GET_INVENTORY,
    SET_CURRENT_ITEM,
    UPDATE_ITEM,
  } from "../types";
  
const InventoryState = () => {
    const initialState = {
        inventory: null,
        current: null,
        filtered: null,
        error: null,
    };

    const [state, dispatch] = useReducer(inventoryReducer, initialState);

    //* Get Inventory
  const getInventory = async () => {
    try {
      const res = await axios.get("/api/inventory");

      dispatch({ type: GET_INVENTORY, payload: res.data });
    } catch (err) {
      dispatch({ type: INVENTORY_ERROR, payload: err.response.msg });
    }
  };

  //* Add Inventory
  const addInventory = async (inventoryItem) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/inventory", inventoryItem, config);

      dispatch({ type: ADD_ITEM, payload: res.data });
    } catch (err) {
      dispatch({ type: INVENTORY_ERROR, payload: err.response.msg });
    }
  };

  //* Delete inventory
  const deleteInventory = async (id) => {
    try {
      await axios.delete(`/api/inventory/${id}`);

      dispatch({
        type: DELETE_ITEM,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: INVENTORY_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //* Clear inventory
  const clearInventory = () => {
    dispatch({ type: CLEAR_INVENTORY });
  };

  //* Set current inventory
  const setCurrent = (inventoryItem) => {
    dispatch({ type: SET_CURRENT_ITEM, payload: inventoryItem });
  };

  //* Clear current inventory
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT_ITEM });
  };

  //* Update Inventory
  const updateInventory = async (inventoryItem) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(
        `/api/inventory/${inventory._id}`,
        inventoryItem,
        config
      );

      dispatch({
        type: UPDATE_ITEM,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: INVENTORY_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //* Filter Inventory
  const filterInventory = (text) => {
    dispatch({ type: FILTER_INVENTORY, payload: text });
  };

  //* Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_INV_FILTER });
  };

    return (
        <InventoryContext.Provider
      value={{
        inventory: state.inventory,
        current: state.current,
        error: state.error,
        filtered: state.filtered,
        addInventory,
        clearInventory,
        clearCurrent,
        clearFilter,
        deleteInventory,
        filterInventory,
        getInventory,
        setCurrent,
        updateInventory,
      }}
    >
      {props.children}
    </InventoryContext.Provider>
    )
}

export default InventoryState
