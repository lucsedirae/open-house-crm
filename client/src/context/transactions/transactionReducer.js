import contactReducer from "../contact/contactReducer";
import {
  ADD_TRANSACTION,
  CLEAR_TRANSACTIONS,
  CLEAR_CURRENT_TRX,
  CLEAR_TRX_FILTER,
  TRANSACTION_ERROR,
  DELETE_TRANSACTION,
  FILTER_TRANSACTIONS,
  GET_TRANSACTIONS,
  SET_CURRENT_TRX,
  UPDATE_TRANSACTION,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
        loading: false,
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
        loading: false,
      };
    case UPDATE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.map((transaction) =>
          transaction._id === action.payload._id ? action.payload : transaction
        ),
        loading: false,
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
        loading: false,
      };
    case CLEAR_TRANSACTIONS:
      return {
        ...state,
        transactions: null,
        filtered: null,
        error: null,
        current: null,
      };
    case SET_CURRENT_TRX:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT_TRX:
      return {
        ...state,
        current: null,
      };
    case FILTER_TRANSACTIONS:
      return {
        ...state,
        filtered: state.transactions.filter((transaction) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return transaction.name.match(regex);
        }),
      };
    case CLEAR_TRX_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case TRANSACTION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
