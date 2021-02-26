//* Dependencies
import React from "react";

//* Material UI components, hooks, and icons
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

//* Exported component
const TransactionsMod = () => {
    //* Returns JSX to DOM
  return (
    <div id="transactions">
      <IconButton href="#">
        <ExpandLessIcon />
      </IconButton>

      <Card style={{ padding: "1rem" }}>
        <Typography variant="h5" style={{ margin: ".5rem" }}>
          Transactions Module
        </Typography>
        <img
          src="/img/trx-inv.gif"
          alt="Gif of agent forum in action"
          style={{ borderRadius: "5px", boxShadow: "3px 3px 5px" }}
        />
        <CardContent>
          <Typography variant="body1">
            The transactions module allows users to store important data about
            their transactions. It features a note pad for each transaction
            where users can keep track of important transaction milestones,
            lockbox combinations, or anything relevant to their transaction.
            Users are also able to keep track of important transactional dates,
            transaction types, revenue, costs, and profits. This data can be
            stored or updated and will also populate the{" "}
            <a href="#analytics">analytics module</a>.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionsMod;
