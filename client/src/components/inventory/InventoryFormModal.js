//* Dependencies
import React, { useContext } from "react";

//* Material UI components, hooks, and icons
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

//* Custom components
import FloatingAction from "../layout/FloatingAction";
import InventoryForm from "./InventoryForm";

//* State context
import ModalContext from "../../context/modal/modalContext";

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
      <FloatingAction handleClickOpen={handleOpen} toolType={"inventory"} />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
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
