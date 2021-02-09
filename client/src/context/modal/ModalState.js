import React, { useReducer } from "react";
import modalReducer from "./modalReducer";

//* Action types
import { HANDLE_OPEN, HANDLE_CLOSE } from "../types";

//* State context
import ModalContext from "./modalContext";

const ModalState = (props) => {
  const initialState = {
    open: false,
    id: null
  };

  const [state, dispatch] = useReducer(modalReducer, initialState);

  //* Clear Filter
  const handleOpen = (id) => {
    dispatch({ type: HANDLE_OPEN, payload: id });
  };

  const handleClose = () => {
    dispatch({ type: HANDLE_CLOSE });
  };

  return (
    <ModalContext.Provider
      value={{
        open: state.open,
        id: state.id,
        handleOpen,
        handleClose
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalState;
