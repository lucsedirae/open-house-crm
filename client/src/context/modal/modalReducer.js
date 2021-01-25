import { HANDLE_OPEN, HANDLE_CLOSE } from "../types";

//eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case HANDLE_OPEN:
      return {
        ...state,
        open: true
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
