import { HANDLE_OPEN, HANDLE_CLOSE } from "../types";

export default (state, action) => {
  switch (action.type) {
    case HANDLE_OPEN:
      return {
        ...state,
        open: true,
        id: action.payload
      };
    case HANDLE_CLOSE:
      return {
        ...state,
        open: false
      };

    default:
      return state;
  }
};
