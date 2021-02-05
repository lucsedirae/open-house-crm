//* Dependencies
import React, { useContext } from "react";

//* Material-UI components, hooks, and icons
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";

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
const TransactionItem = ({ selectedTrxId, transaction }) => {
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
  } = transaction;

   //* Returns JSX to DOM 
  return (
    <Container style={{ padding: "3rem" }}>
      <Paper>
        <Typography align="center" variant="h5">
          {trxName}{" "}
          <Chip
            size="small"
            label={type}
            style={{
              background: typeCheck(type),
              color: "white",
              fontFamily: "Big Shoulders Display",
              fontWeight: "800"
            }}
          />
        </Typography>
        <Divider />
        <Typography align="center" variant="body1">
          Revenue: {revenue} - Expenses: {cost} - Profit {revenue - cost}
        </Typography>
        <Divider />
        <Typography align="center" variant="body1">
          Date Opened: {dateOpened} - Expected Close Date: {expectedCloseDate}
        </Typography>
      </Paper>
    </Container>
  );
};

export default TransactionItem;
