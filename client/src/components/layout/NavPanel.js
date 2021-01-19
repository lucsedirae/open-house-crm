//* Dependencies
import React from "react";

//* Material-UI components, hooks, and icons
import Card from "@material-ui/core/Card";
import ContactsIcon from "@material-ui/icons/Contacts";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import CategoryIcon from '@material-ui/icons/Category';
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ReceiptIcon from "@material-ui/icons/Receipt";

//* Exported component
const NavPanel = () => {
  return (
    <Card style={{padding: "5px", marginBottom: "1rem"}}>
      <Tooltip title="Contacts">
        <IconButton aria-label="contacts" href="/dashboard">
          <ContactsIcon color="primary"/>
        </IconButton>
      </Tooltip>

      <Tooltip title="Transactions">
        <IconButton aria-label="transactions" href="/dashboard/transactions">
          <ReceiptIcon color="secondary"/>
        </IconButton>
      </Tooltip>

      <Tooltip title="Business Overview">
        <IconButton aria-label="business-overview">
          <MonetizationOnIcon style={{color: "green"}}/>
        </IconButton>
      </Tooltip>

      <Tooltip title="Sales Tool Inventory">
        <IconButton aria-label="tool-inventory" href="/dashboard/inventory">
          <CategoryIcon style={{color: "silver"}}/>
        </IconButton>
      </Tooltip>
    </Card>
  );
};

export default NavPanel;
