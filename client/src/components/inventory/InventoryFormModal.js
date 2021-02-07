//* Dependencies
import React, { useContext } from 'react';
import Dialog from '@material-ui/core/Dialog';

//* Material UI components, hooks, and icons
import DialogContent from '@material-ui/core/DialogContent';

//* Custom components
import InventoryForm from './InventoryForm';
import FloatingAction from '../layout/FloatingAction';

//* State context
import ModalContext from '../../context/modal/modalContext';

//* Exported component
export default function InventoryFormModal({
  updateInventory,
  clearCurrent,
  addInventory,
  currentInv,
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
        aria-labelledby='form-dialog-title'
      >
        <DialogContent>
          <InventoryForm
            handleClose={handleClose}
            updateInventory={updateInventory}
            clearCurrent={clearCurrent}
            addInventory={addInventory}
            currentInv={currentInv}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
