import React, { useReducer } from "react";
import modalReducer from "./modalReducer";

//* Action types
import { HANDLE_OPEN, HANDLE_CLOSE } from "../types";

//* State context
import ModalContext from "./modalContext";

const ModalState = (props) => {
  const initialState = {
    open: false
  };

  const [state, dispatch] = useReducer(modalReducer, initialState);

  //* Clear Filter
  const handleOpen = () => {
    dispatch({ type: HANDLE_OPEN });
  };

  const handleClose = () => {
    dispatch({ type: HANDLE_CLOSE });
  };

  return (
    <ModalContext.Provider
      value={{
        open: state.open,
        handleOpen,
        handleClose
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalState;
