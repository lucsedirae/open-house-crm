//* Dependencies
import React, { useContext } from 'react';

//* Material UI components, hooks, and icons
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

//* Custom components
import FloatingAction from '../layout/FloatingAction';
import TransactionForm from './TransactionForm';

//* State context
import ModalContext from '../../context/modal/modalContext';

//* Exported component
export default function TransactionFormModal({
  updateTransaction,
  clearCurrent,
  currentTransaction,
  addTransaction,
}) {
  //* Initiallizes state
  const modalContext = useContext(ModalContext);
  const { open, handleOpen, handleClose } = modalContext;

  //* Returns JSX to DOM
  return (
    <div>
      <FloatingAction handleClickOpen={handleOpen} toolType={"transactions"} />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogContent>
          <TransactionForm
            handleClose={handleClose}
            updateTransaction={updateTransaction}
            clearCurrent={clearCurrent}
            addTransaction={addTransaction}
            currentTransaction={currentTransaction}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
