import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import PublicTwoToneIcon from "@material-ui/icons/PublicTwoTone";
import Typography from "@material-ui/core/Typography";
import Map from "../map/Map";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

//* Exported component
export default function CustomizedDialogs({ contact }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //* Returns JSX to DOM
  return (
    <div>
      <Button
        startIcon={<PublicTwoToneIcon />}
        variant="contained"
        size="small"
        onClick={handleClickOpen}
        style={{
          backgroundColor: "#008B8B",
          color: "white",
          fontSize: "15px",
          fontFamily: "Big Shoulders Display",
          fontWeight: "600"
        }}
      >
        Map
      </Button>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {contact.name}
          <Typography variant="body1">
            {contact.streetNumber} {contact.street}, {contact.city},
            {contact.state}
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <Map contact={contact} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
