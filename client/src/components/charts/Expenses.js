//* Dependencies
import React, { useContext, useEffect, Fragment, useState } from "react";
import PropTypes from "prop-types";
import { DataGrid } from "@material-ui/data-grid";
import Spinner from "../layout/Spinner";

//* Material UI components, hooks, and icons
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import CustomizedDialogs from "../modals/MapModal";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import FaceIcon from "@material-ui/icons/Face";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

//* State context

//Import transactions data
import TransactionContext from "../../context/transactions/transactionContext";

//Import Chart Component
import { Bar } from "react-chartjs-2";

//* Dummy Data

//* Defines styles to be served via makeStyles MUI hook
const useStyles = makeStyles({
	root: {
		minWidth: 275,
		marginBottom: "1rem",
	},
	title: {
		textAlign: "center",
	},
	pos: {
		marginBottom: "1rem",
	},
	buttonGroup: {
		justifyContent: "center",
	},
	Box: {
		marginTop: "1rem",
	},
});

//* Exported component
const Expenses = () => {
	const transactionContext = useContext(TransactionContext);
	const {
		transactions,
		getTransactions,
		loading,
		setCurrentTrx,
	} = transactionContext;

	const [transaction, setTransaction] = useState({
		trxName: "",
		type: "",
		cost: "",
		revenue: "",
		dateOpened: "",
		dateClosed: "",
		expectedCloseDate: "",
	});

	const {
		trxName,
		type,
		cost,
		revenue,
		dateOpened,
		dateClosed,
		expectedCloseDate,
	} = transaction;

	useEffect(() => {
		getTransactions();
		// eslint-disable-next-line
	}, []);

	const expense =
		transactions !== null && !loading
			? transactions.map((transaction) => ({
					cost: transaction.cost,
			  }))
			: console.log("error");

	const data = {
		labels: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		],
		datasets: [
			{
				label: "Expenses in Thousands",
				backgroundColor: "rgb(255,0,0)",
				borderColor: "rgb(11,227,210)",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(255,0,54,0.4)",
				hoverBorderColor: "rgb(0,88,101)",
				data: expense,
			},
		],
	};
	//* Initializes styling classes
	const classes = useStyles();

	//* Returns JSX to DOM
	return (
		<div>
			<h2>Expenses</h2>
			<Bar
				data={data}
				width={400}
				height={400}
				options={{
					maintainAspectRatio: false,
				}}
			/>{" "}
		</div>
	);
};

export default Expenses;
