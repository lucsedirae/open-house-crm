//* Dependencies
import React from "react";

//* Material UI components, hooks, and icons
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

//* Exported component
const InventoryMod = () => {
    //* Returns JSX to DOM
  return (
    <div id="inventory">
      <IconButton href="#">
        <ExpandLessIcon />
      </IconButton>

      <Card style={{ padding: "1rem" }}>
        <Typography variant="h5" style={{ margin: ".5rem" }}>
          Inventory Module
        </Typography>
        <img
          src="/img/trx-inv.gif"
          alt="Gif of agent forum in action"
          style={{ borderRadius: "5px", boxShadow: "3px 3px 5px" }}
        />
        <CardContent>
          <Typography variant="body1">
            The inventory module stores information about sales tools allowing
            users to know the status and location of each item. Inventory items
            can be assigned value and cost amounts allowing users to keep track
            of depreciating assets as well as the condition of the item. Never
            lose a an expensive lockbox, sign, staging item, or other tool
            again!
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default InventoryMod;
