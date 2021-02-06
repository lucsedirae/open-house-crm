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

let charted = {
	January: 0,
	February: 0,
	March: 0,
	April: 0,
	May: 0,
	June: 0,
	July: 0,
	August: 0,
	September: 0,
	October: 0,
	November: 0,
	December: 0,
};

//* Exported component
const LineChart = () => {
	const [transactionData, setTransactionData] = useState([]);

	useEffect(() => {
		getTransactionCost();
	}, []);
	const getTransactionCost = async () => {
		const res = await axios.get("http://localhost:3000/api/transactions");

		res.data.map((transactions) => {
			console.log(transactions.cost);
		});
		res.data.map((transactions) => {
			let month = moment.utc(transactions.dateOpened).format("MMMM");
			let profit = transactions.revenue - transactions.cost;
			console.log(transactions);

			switch (month) {
				case "January":
					return (charted.January += profit);
				case "February":
					return (charted.February += profit);
				case "March":
					return (charted.March += profit);
				case "April":
					return (charted.April += profit);
				case "May":
					return (charted.May += profit);
				case "June":
					return (charted.June += profit);
				case "July":
					return (charted.July += profit);
				case "August":
					return (charted.August += profit);
				case "September":
					return (charted.September += profit);
				case "October":
					return (charted.October += profit);
				case "November":
					return (charted.November += profit);
				case "December":
					return (charted.December += profit);
			}
		});
		console.log(Object.values(charted));
		Object.values(charted);
		setTransactionData(charted);
	};
	console.log(transactionData);

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
				data: Object.values(transactionData),
				backgroundColor: (transactionsData) =>
					transactionsData <= 0 ? "red" : "green",
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
