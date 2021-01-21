import {
  ADD_ITEM,
  CLEAR_INVENTORY,
  CLEAR_CURRENT_ITEM,
  CLEAR_INV_FILTER,
  DELETE_ITEM,
  INVENTORY_ERROR,
  FILTER_INVENTORY,
  GET_INVENTORY,
  SET_CURRENT_ITEM,
  UPDATE_ITEM,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        inventory: action.payload,
        loading: false,
      };
    case CLEAR_CURRENT_ITEM:
      return {
        ...state,
        current: null,
      };
    case CLEAR_INVENTORY:
      return {
        ...state,
        inventory: null,
        filtered: null,
        error: null,
        current: null,
      };
    case CLEAR_INV_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case DELETE_ITEM:
      return {
        ...state,
        inventory: state.inventory.filter(
          (item) => item._id !== action.payload
        ),
        loading: false,
      };
    case INVENTORY_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case FILTER_INVENTORY:
      return {
        ...state,
        filtered: state.inventory.filter((item) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return item.name.match(regex);
        }),
      };
    case GET_INVENTORY:
      return {
        ...state,
        transactions: action.payload,
        loading: false,
      };
    case SET_CURRENT_ITEM:
      return {
        ...state,
        current: action.payload,
      };
    case UPDATE_ITEM:
      return {
        ...state,
        inventory: state.inventory.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
        loading: false,
      };
    default:
      return state;
  }
};
