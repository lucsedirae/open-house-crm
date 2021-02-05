//* Dependencies
import React, { useContext, useState, useEffect } from "react";
import TransactionContext from "../../context/transactions/transactionContext";

import axios from "axios";
//* Material UI components, hooks, and icons
import { makeStyles } from "@material-ui/core/styles";

import moment from "moment";

import { Line } from "react-chartjs-2";

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
			return {
				x: moment.utc(transaction.dateOpened).format("MMMM"),
				y: transaction.revenue - transaction.cost,
			};
		});

		// console.log(chartData);
		// console.log(res.data);
		setTransaction(transactionData);
		// console.log(transactionData);
	};

	const data = {
		labels: transaction.map((transactions) => {
			return transactions.x;
		}),
		datasets: [
			{
				label: "Rate of Profit",
				borderColor: "rgb(11,227,210)",
				hoverBackgroundColor: "rgba(255,0,54,0.4)",
				hoverBorderColor: "rgb(0,88,101)",
				data: transaction.map((transactions) => {
					return transactions.y;
				}),
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
			<Line data={data} width={"700em"} height={"500em"} />
		</div>
	);
};

export default LineChart;
