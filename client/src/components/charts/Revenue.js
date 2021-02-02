//* Dependencies
import React, { useContext, useState, useEffect } from "react";
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
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import FaceIcon from "@material-ui/icons/Face";
import TransactionContext from "../../context/transactions/transactionContext";

//* State context

import { Bar } from "react-chartjs-2";

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
const BarChart = () => {
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

	const revenueData =
		transactions !== null && !loading
			? transactions.map((transaction) => ({
					cost: transaction.revenue,
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
				label: "Revenue in thousands",
				data: revenueData,
				backgroundColor: [
					"rgb(21, 138, 12)",
					"rgb(21, 138, 12)",
					"rgb(21, 138, 12)",
					"rgb(21, 138, 12)",
					"rgb(21, 138, 12)",
					"rgb(21, 138, 12)",
					"rgb(21, 138, 12)",
					"rgb(21, 138, 12)",
					"rgb(21, 138, 12)",
					"rgb(21, 138, 12)",
					"rgb(21, 138, 12)",
					"rgb(21, 138, 12)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 1,
			},
		],
	};

	//* Initializes styling classes
	const classes = useStyles();

	//* Returns JSX to DOM
	return (
		<div>
			<h2>Revenue</h2>
			<Bar
				data={data}
				width={400}
				height={400}
				options={{
					maintainAspectRatio: false,
				}}
			/>
		</div>
	);
};

export default BarChart;
