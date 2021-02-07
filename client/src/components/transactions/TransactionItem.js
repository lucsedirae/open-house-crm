//* Dependencies
import React, { useContext } from "react";
import Moment from "moment";

//* Material-UI components, hooks, and icons
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";

//* State context
import ModalContext from "../../context/modal/modalContext";
import { Divider } from "@material-ui/core";

//* Checks the transaction type and returns the appropriate chip background color
const typeCheck = (type) => {
  switch (type) {
    case "Listing":
      return "purple";
    case "Sale":
      return "#008B8B";
    case "Referral":
      return "orange";
    default:
      return "silver";
  }
};

//* Exported component
const TransactionItem = ({
  selectedTrxId,
  transaction,
  currentTransaction,
  setCurrentTrx,
}) => {
  const modalContext = useContext(ModalContext);
  const { handleOpen } = modalContext;

  const {
    type,
    trxName,
    cost,
    revenue,
    dateOpened,
    dateClosed,
    expectedCloseDate,
    note,
  } = transaction;

  //* Returns JSX to DOM
  return (
    <Container style={{ padding: "3rem" }}>
      <Paper>
        <Typography align="center" variant="h5" style={{ padding: ".5rem" }}>
          {trxName}{" "}
          <Chip
            size="small"
            label={type}
            style={{
              background: typeCheck(type),
              color: "white",
              fontFamily: "Big Shoulders Display",
              fontWeight: "800",
            }}
          />
        </Typography>
        <Divider />
        <Typography>
        <IconButton
          size="small"
          style={{ margin: "1rem" }}
        >
          <EditIcon color="disabled" />
        </IconButton>
        <IconButton
          size="small"
          style={{ margin: "1rem" }}
        >
          <DeleteForeverIcon color="disabled" />
        </IconButton>
        </Typography>
        <Typography align="center" variant="body1">
          Revenue: ${revenue} - Expenses: ${cost} - Profit ${revenue - cost}
        </Typography>
        <br />
        <Typography align="center" variant="body1">
          Date Opened: {Moment(dateOpened).format("MM/DD/YYYY")} - Expected
          Close Date: {Moment(expectedCloseDate).format("MM/DD/YYYY")}
        </Typography>
        <Typography align="center" variant="body1">
          Date Closed:{" "}
          {dateClosed
            ? Moment(dateClosed).format("MM/DD/YYYY")
            : "Open Transaction"}
        </Typography>
        <Divider />
        <Typography align="center" variant="body1">
          Notes: {note}
        </Typography>
      </Paper>
    </Container>
  );
};

export default TransactionItem;
