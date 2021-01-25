import React, { useContext } from "react";
import Dialog from "@material-ui/core/Dialog";
import ModalContext from "../../context/modal/modalContext";
import DialogContent from "@material-ui/core/DialogContent";
import FloatingAction from "../layout/FloatingAction";
import ContactForm from "./ContactForm";

export default function ContactFormModal() {
  /* const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }; */

  const modalContext = useContext(ModalContext);
  const { open, handleOpen, handleClose } = modalContext;

  return (
    <div>
      <FloatingAction handleClickOpen={handleOpen} />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <ContactForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
