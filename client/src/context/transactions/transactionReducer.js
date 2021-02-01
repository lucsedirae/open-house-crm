import {
  ADD_TRANSACTION,
  BUILD_ROWS,
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
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
        loading: false,
      };
    case CLEAR_CURRENT_TRX:
      return {
        ...state,
        current: null,
      };
    case CLEAR_TRANSACTIONS:
      return {
        ...state,
        transactions: null,
        filtered: null,
        error: null,
        current: null,
      };
    case CLEAR_TRX_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
        loading: false,
      };
    case FILTER_TRANSACTIONS:
      return {
        ...state,
        filtered: state.transactions.filter((transaction) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return transaction.name.match(regex);
        }),
      };
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
        loading: false,
      };
    case SET_CURRENT_TRX:
      return {
        ...state,
        current: action.payload,
      };
    case TRANSACTION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.map((transaction) =>
          transaction._id === action.payload._id ? action.payload : transaction
        ),
        loading: false,
      };
    default:
      return state;
  }
};
