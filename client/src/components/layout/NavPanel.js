//* Dependencies
import React from "react";

//* Material-UI components, hooks, and icons
import Card from "@material-ui/core/Card";
import ContactsIcon from "@material-ui/icons/Contacts";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import CategoryIcon from "@material-ui/icons/Category";
import ForumIcon from "@material-ui/icons/Forum";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ReceiptIcon from "@material-ui/icons/Receipt";
import HelpIcon from "@material-ui/icons/Help";

//* Exported component
const NavPanel = () => {
	return (
		<Card style={{ padding: "5px", marginBottom: "1rem" }}>
			<Tooltip title="Contacts">
				<IconButton aria-label="contacts" href="/dashboard">
					<ContactsIcon style={{ color: "orange" }} />
				</IconButton>
			</Tooltip>

			<Tooltip title="Transactions">
				<IconButton aria-label="transactions" href="/dashboard/transactions">
					<ReceiptIcon style={{ color: "purple" }} />
				</IconButton>
			</Tooltip>

			<Tooltip title="Business Overview">
				<IconButton aria-label="business-overview" href="/dashboard/charts">
					<MonetizationOnIcon style={{ color: "#008B8B" }} />
				</IconButton>
			</Tooltip>

			<Tooltip title="Sales Tool Inventory">
				<IconButton aria-label="tool-inventory" href="/dashboard/inventory">
					<CategoryIcon style={{ color: "orange" }} />
				</IconButton>
			</Tooltip>

			<Tooltip title="Agent Forum">
				<IconButton aria-label="my-account" href="/forum">
					<ForumIcon style={{ color: "purple" }} />
				</IconButton>
			</Tooltip>

			<Tooltip title="My Account">
				<IconButton aria-label="my-account" href="/account">
					<AccountBoxIcon style={{ color: "#008B8B" }} />
				</IconButton>
			</Tooltip>

			<Tooltip title="Help">
				<IconButton aria-label="help" href="/help">
					<HelpIcon style={{ color: "orange" }} />
				</IconButton>
			</Tooltip>
		</Card>
	);
};

export default NavPanel;
