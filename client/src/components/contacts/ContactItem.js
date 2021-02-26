//* Dependencies
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useToasts } from "react-toast-notifications";
import background from "../../img/Subtle-Prism2.svg";

//* Material UI components, hooks, and icons
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CustomizedDialogs from "../modals/MapModal";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//* State context
import ContactContext from "../../context/contact/contactContext";
import ModalContext from "../../context/modal/modalContext";

//* Custom components
import NameTag from "./NameTag";
import ContactButtons from "./ContactButtons";

//* Defines styles to be served via makeStyles MUI hook
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: "1rem",
    border: "1px solid grey",
    boxShadow: "0 8px 5px -3px grey",
    fontFamily: "Oswald",
    background: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    fontWeight: "200",
    margin: "0 auto",
  },
  address: {
    textAlign: "center",
    fontSize: "18px",
    fontFamily: "Big Shoulders Display",
    margin: "0 auto",
  },
  Box: {
    marginTop: "1rem",
  },
});

//* Exported component
export const ContactItem = ({ contact }) => {
  //* react-toast-notifications custom hook
  const { addToast } = useToasts();
  //* Initializes styling classes
  const classes = useStyles();

  //* Initiallizes state
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
    type,
    note,
  } = contact;

  const modalContext = useContext(ModalContext);
  const { handleOpen } = modalContext;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
    addToast("Contact deleted!", {
      appearance: "success",
      autoDismiss: true,
    });
  };

  const onClick = () => {
    handleOpen();
    setCurrent(contact);
  };

  //* Returns JSX to DOM
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        align="center"
      >
        <NameTag contactType={type} contactName={name} />
      </AccordionSummary>
      <AccordionDetails>
        <Card id="contact-card" className={classes.root} align="center">
          <CardContent>
            <Box textAlign="center" className={classes.Box}>
              <ContactButtons email={email} phone={phone} />
            </Box>

            <Box className={classes.Box} style={{ textAlign: "center" }}>
              {street && (
                <Typography variant="body1" className={classes.address}>
                  {streetNumber} {street}
                </Typography>
              )}
              {address2 && <Typography variant="body1">{address2}</Typography>}
              {city && (
                <Typography variant="body1" className={classes.address}>
                  {city} {state} {zipcode}
                </Typography>
              )}
              {note && (
                <Typography
                  align="center"
                  variant="body1"
                  className={classes.address}
                >
                  Notes: {note}
                </Typography>
              )}
            </Box>
          </CardContent>
          <CardActions style={{ justifyContent: "center" }}>
            <Button
              startIcon={<EditIcon />}
              onClick={onClick}
              variant="contained"
              size="small"
              style={{
                backgroundColor: "#008B8B",
                color: "white",
                fontSize: "15px",
                fontFamily: "Big Shoulders Display",
                fontWeight: "600",
              }}
            >
              Edit
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              color="secondary"
              onClick={onDelete}
              variant="contained"
              size="small"
              style={{
                backgroundColor: "#008B8B",
                color: "white",
                fontSize: "15px",
                fontFamily: "Big Shoulders Display",
                fontWeight: "600",
              }}
            >
              Delete
            </Button>

            <CustomizedDialogs contact={contact} />
          </CardActions>
        </Card>
      </AccordionDetails>
    </Accordion>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
