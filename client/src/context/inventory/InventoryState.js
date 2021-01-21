//* Dependencies
import React, { useReducer } from "react";
import axios from "axios";
import contactReducer from "./contactReducer";

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
    return (
        <div>
            
        </div>
    )
}

export default InventoryState
