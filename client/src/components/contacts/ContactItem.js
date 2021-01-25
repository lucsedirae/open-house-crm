//* Dependencies
import React, { useContext } from "react";
import PropTypes from "prop-types";

//* Material UI components, hooks, and icons
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import CustomizedDialogs from "../modals/MapModal";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import FaceIcon from "@material-ui/icons/Face";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import PhoneIcon from "@material-ui/icons/Phone";

//* State context
import ContactContext from "../../context/contact/contactContext";
import ModalContext from "../../context/modal/modalContext";

//* Defines styles to be served via makeStyles MUI hook
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: "1rem",
    backgroundColor: "lightgrey",
    border: "1px solid grey",
    boxShadow: "0 8px 5px -3px grey",
    fontFamily: "Oswald",
    fontWeight: "200"
  },
  title: {
    textAlign: "center"
  },
  pos: {
    marginBottom: "1rem"
  },
  buttonGroup: {
    justifyContent: "center"
  },
  Box: {
    marginTop: "1rem"
  }
});

//* Checks the contact type and returns the appropriate badge background color
const typeCheck = (type) => {
  switch (type) {
    case "vendor":
      return "lightgreen";
    case "client":
      return "lightblue";
    default:
      return "yellow";
  }
};

//* Exported component
export const ContactItem = ({ contact }) => {
  //* Initializes styling classes
  const classes = useStyles();

  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const {
    _id,
    name,
    email,
    phone,
    streetNumber,
    street,
    address2,
    city,
    state,
    zipcode,
    type
  } = contact;

  const modalContext = useContext(ModalContext);
  const { handleOpen } = modalContext;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  const onClick = () => {
    handleOpen();
    setCurrent(contact);
  };

  //* Returns JSX to DOM
  return (
    <Card id="contact-card" className={classes.root}>
      <CardContent>
        <Typography variant="h5" className={classes.title}>
          {name}{" "}
          <Chip
            size="small"
            label={type}
            // label={type.charAt(0).toUpperCase() + type.slice(1)}
            style={{ background: typeCheck(type) }}
            icon={<FaceIcon size="small" />}
          />
        </Typography>
        <Box textAlign="center" className={classes.Box}>
          <ButtonGroup className={classes.buttonGroup}>
            <Button
              variant="contained"
              startIcon={<ContactMailIcon />}
              href={`mailto:${email}`}
            >
              {email}
            </Button>
            <Button
              variant="contained"
              startIcon={<PhoneIcon />}
              href={`tel:${phone}`}
              color="primary"
            >
              {phone}
            </Button>
          </ButtonGroup>
        </Box>

        <Box className={classes.Box} style={{ textAlign: "center" }}>
          {street && (
            <Typography variant="body1" className={classes.title}>
              {streetNumber} {street}
            </Typography>
          )}
          {address2 && <Typography variant="body1">{address2}</Typography>}
          {city && (
            <Typography variant="body1">
              {city} {state} {zipcode}
            </Typography>
          )}
        </Box>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button
          startIcon={<EditIcon />}
          color="primary"
          onClick={onClick}
          variant="outlined"
        >
          Edit
        </Button>
        <Button
          startIcon={<DeleteIcon />}
          color="secondary"
          onClick={onDelete}
          variant="outlined"
        >
          Delete
        </Button>
        <CustomizedDialogs contact={contact} />
      </CardActions>
    </Card>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
