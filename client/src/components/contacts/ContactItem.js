//* Dependencies
import React from "react";
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
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import FaceIcon from "@material-ui/icons/Face";
import PublicIcon from "@material-ui/icons/Public";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import PhoneIcon from "@material-ui/icons/Phone";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: "1rem"
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
export const ContactItem = ({ contact }) => {
  const classes = useStyles();

  const {
    id,
    name,
    email,
    phone,
    address,
    streetNumber,
    street,
    address2,
    city,
    state,
    zipcode,
    type
  } = contact;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" className={classes.title}>
          {name}{" "}
          <Chip
            size="small"
            label={type}
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

        <Box className={classes.Box}>
          {address.street && (
            <Typography variant="body1">
              {address.streetNumber} {address.street}
            </Typography>
          )}
          {address.address2 && (
            <Typography variant="body1">{address.address2}</Typography>
          )}
          {address.city && (
            <Typography variant="body1">
              {address.city} {address.state} {address.zipcode}
            </Typography>
          )}
        </Box>
      </CardContent>
      <CardActions>
        <ButtonGroup variant="contained" size="small">
          <Button startIcon={<EditIcon />} color="primary">
            Edit
          </Button>
          <Button startIcon={<DeleteIcon />} color="secondary">
            Delete
          </Button>
          <CustomizedDialogs />
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
