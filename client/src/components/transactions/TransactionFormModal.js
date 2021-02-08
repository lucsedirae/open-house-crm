//* Dependencies
import React, { useContext } from "react";
import Dialog from "@material-ui/core/Dialog";

//* Material UI components, hooks, and icons
import DialogContent from "@material-ui/core/DialogContent";

//* Custom components
import TransactionForm from "./TransactionForm";
import FloatingAction from "../layout/FloatingAction";

//* State context
import ModalContext from "../../context/modal/modalContext";

//* Exported component
export default function TransactionFormModal({
  updateTransaction,
  clearCurrent,
  addTransaction,
  currentTransaction,
  setCurrentTrx,
}) {
  //* Initiallizes state
  const modalContext = useContext(ModalContext);
  const { open, handleOpen, handleClose } = modalContext;

  //* Returns JSX to DOM
  return (
    <div>
      <FloatingAction handleClickOpen={handleOpen} />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <TransactionForm
            handleClose={handleClose}
            updateTransaction={updateTransaction}
            clearCurrent={clearCurrent}
            addTransaction={addTransaction}
            currentTransaction={currentTransaction}
            setCurrentTrx={setCurrentTrx}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
