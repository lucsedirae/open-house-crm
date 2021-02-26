//* Dependencies
import React, { useContext } from "react";

//* Material UI components, hooks, and icons
import Badge from "@material-ui/core/Badge";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CommentIcon from "@material-ui/icons/Comment";

//* Custom components
import ReplyForm from "./ReplyForm";

//* State context
import ModalContext from "../../context/modal/modalContext";

//* Exported component
export default function ReplyModal({ _id, replies }) {
  //* Initiallizes state
  const modalContext = useContext(ModalContext);
  const { open, handleClose } = modalContext;

  const getId = (e) => {
    const findId = e.target.dataset.id;
    console.log(findId);
  };

  //* Returns JSX to DOM
  return (
    <div>
      <Badge
        badgeContent={replies.length}
        onClick={getId}
        color="secondary"
        data-id={_id}
      >
        <CommentIcon style={{ color: "orange" }} />
      </Badge>{" "}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <ReplyForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
