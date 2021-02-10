//* Dependencies
import React, { useContext } from "react";
import Moment from "moment";

//* Material-UI components, hooks, and icons
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import background from "../../img/Subtle-Prism2.svg";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

//* State context
import ModalContext from "../../context/modal/modalContext";
import { Divider } from "@material-ui/core";
import TransactionContext from "../../context/transactions/transactionContext";

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
const TransactionItem = ({ selectedTrxId, transaction, deleteTransaction }) => {
  const transactionContext = useContext(TransactionContext);
  const { setCurrentTrx } = transactionContext;

  const modalContext = useContext(ModalContext);
  const { handleOpen } = modalContext;

  const onDelete = () => {
    deleteTransaction(transaction);
  };

  const onClick = () => {
    handleOpen();
    setCurrentTrx(transaction);
  };

  const {
    type,
    trxName,
    cost,
    revenue,
    dateOpened,
    dateClosed,
    expectedCloseDate,
    note
  } = transaction;

  //* Returns JSX to DOM
  return (
    <Container style={{ padding: "3rem" }}>
      <Grid container spacing={0} align="center" justify="center">
        <Grid xs={12} sm={12} md={8}>
          <Paper
            style={{
              background: `url(${background})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <Typography
              align="center"
              variant="h5"
              style={{
                padding: ".5rem",
                fontSize: "30px",
                fontFamily: "Big Shoulders Display",
                fontWeight: "600"
              }}
            >
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
            <br />
            <Grid container spacing={0} align="center" justify="center">
              <Grid xs={12} sm={3} md={3}>
                <Typography
                  align="center"
                  variant="body1"
                  style={{
                    fontFamily: "Big Shoulders Display",
                    fontWeight: "600"
                  }}
                >
                  Revenue: ${revenue}
                </Typography>
                <Typography
                  align="center"
                  variant="body1"
                  style={{
                    fontFamily: "Big Shoulders Display",
                    fontWeight: "600",
                    color: "red"
                  }}
                >
                  Expenses: -${cost}
                </Typography>
                <Typography
                  align="center"
                  variant="body1"
                  style={{
                    fontFamily: "Big Shoulders Display",
                    fontWeight: "600",
                    color: "green"
                  }}
                >
                  Profit: +${revenue - cost}
                </Typography>
              </Grid>
              <Grid xs={12} sm={3} md={3}>
                <Typography
                  align="center"
                  variant="body1"
                  style={{
                    fontFamily: "Big Shoulders Display",
                    fontWeight: "600"
                  }}
                >
                  Date Opened: {Moment(dateOpened).format("MM/DD/YYYY")}
                </Typography>
                <Typography
                  align="center"
                  variant="body1"
                  style={{
                    fontFamily: "Big Shoulders Display",
                    fontWeight: "600"
                  }}
                >
                  Expected Close Date:{" "}
                  {Moment(expectedCloseDate).format("MM/DD/YYYY")}
                </Typography>
                <Typography
                  align="center"
                  variant="body1"
                  style={{
                    fontFamily: "Big Shoulders Display",
                    fontWeight: "600"
                  }}
                >
                  Date Closed:{" "}
                  {dateClosed
                    ? Moment(dateClosed).format("MM/DD/YYYY")
                    : "Open Transaction"}
                </Typography>
              </Grid>
            </Grid>
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
                margin: "10px 5px"
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
                margin: "10px 5px"
              }}
            >
              Delete
            </Button>
            <br />
            <Divider />

            <Typography
              align="center"
              variant="body1"
              style={{
                fontFamily: "Big Shoulders Display",
                fontWeight: "600"
              }}
            >
              Notes: {note}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TransactionItem;
