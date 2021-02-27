//* Dependencies
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useToasts } from "react-toast-notifications";
import styles from "./contacts.module.css";

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
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//* State context
import ContactContext from "../../context/contact/contactContext";
import ModalContext from "../../context/modal/modalContext";

//* Custom components
import NameTag from "./NameTag";
import ContactButtons from "./ContactButtons";

//* Exported component
export const ContactItem = ({ contact }) => {
  //* react-toast-notifications custom hook
  const { addToast } = useToasts();

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
        <Card id="contact-card" className={styles.contactCard} align="center">
          <CardContent>
            <Box textAlign="center" className={styles.box}>
              <ContactButtons email={email} phone={phone} />
            </Box>

            <Box className={styles.box} style={{ textAlign: "center" }}>
              {street && (
                <Typography variant="body1" className={styles.address}>
                  {streetNumber} {street}
                </Typography>
              )}
              {address2 && (
                <Typography variant="body1" className={styles.address}>
                  {address2}
                </Typography>
              )}
              {city && (
                <Typography variant="body1" className={styles.address}>
                  {city} {state} {zipcode}
                </Typography>
              )}
              {note && (
                <Typography
                  align="center"
                  variant="body1"
                  className={styles.address}
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
              className={styles.crudButton}
            >
              Edit
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              color="secondary"
              onClick={onDelete}
              variant="contained"
              size="small"
              className={styles.crudButton}
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
