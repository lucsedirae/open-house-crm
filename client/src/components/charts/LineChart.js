//* Dependencies
import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import TransactionContext from "../../context/transactions/transactionContext";

import axios from "axios";
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

import { Line } from "react-chartjs-2";
import { LocalFlorist } from "@material-ui/icons";

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
const LineChart = () => {
	const transactionContext = useContext(TransactionContext);
	const {
		transactions,
		getTransactions,
		loading,
		setCurrentTrx,
	} = transactionContext;

	const [transaction, setTransaction] = useState([]);

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
		getTransactionCost();
	}, []);
	const getTransactionCost = async () => {
		const res = await axios.get("http://localhost:3000/api/transactions");

		const transactionData = res.data.map((transaction) => {
			return transaction.revenue - transaction.cost;
		});

		// console.log(chartData);
		console.log(res.data);
		setTransaction(transactionData);
		console.log(transactionData);
	};

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
				label: "Rate of Profit",
				borderColor: "rgb(11,227,210)",
				hoverBackgroundColor: "rgba(255,0,54,0.4)",
				hoverBorderColor: "rgb(0,88,101)",
				data: transaction,
				backgroundColor: (transactions) =>
					transactions <= 0 ? "red" : "green",
				pointStyle: "rect",
				pointRadius: 5,
				fill: false,
				base: 0,
			},
		],
	};

	//* Initializes styling classes
	const classes = useStyles();

	//* Returns JSX to DOM
	return (
		<div>
			<h2>Profit</h2>
			<Line data={data} width={200} height={200} base={0} />
			{/* {console.log(profit)} */}
		</div>
	);
};

export default LineChart;
