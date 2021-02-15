//* Dependencies
import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

import moment from "moment";

//Import Chart Component
import { Bar } from "react-chartjs-2";

import Grid from "@material-ui/core/Grid";

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
	const [transactionRevenue, setTransactionRevenue] = useState({});
	const [transactionCost, setTransactionCost] = useState({});

	useEffect(() => {
		getTransactionRevenue();
		// getTransactionCost();
	}, []);

	let chartedRevenue = {
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
	let chartedCost = {
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

	const getTransactionRevenue = async () => {
		const res = await axios.get("/api/transactions");
		const theTransactions = [];

		res.data.map((transactions) => {
			let month = moment.utc(transactions.dateOpened).format("MMMM");
			let revenue = transactions.revenue;
			let cost = transactions.cost;
			console.log(cost);

			switch (month) {
				case "January":
					chartedRevenue.January += revenue;
					chartedCost.January += cost;
					break;
				case "February":
					chartedRevenue.February += revenue;
					chartedCost.February += cost;
					break;
				case "March":
					chartedRevenue.March += revenue;
					chartedCost.March += cost;
					break;
				case "April":
					chartedRevenue.April += revenue;
					chartedCost.April += cost;
					break;
				case "May":
					chartedRevenue.May += revenue;
					chartedCost.May += cost;
					break;
				case "June":
					chartedRevenue.June += revenue;
					chartedCost.June += cost;
					break;
				case "July":
					chartedRevenue.July += revenue;
					chartedCost.July += cost;
					break;
				case "August":
					chartedRevenue.August += revenue;
					chartedCost.August += cost;
					break;
				case "September":
					chartedRevenue.September += revenue;
					chartedCost.September += cost;
					break;
				case "October":
					chartedRevenue.October += revenue;
					chartedCost.October += cost;
					break;
				case "November":
					chartedRevenue.November += revenue;
					chartedCost.November += cost;
					break;
				case "December":
					chartedRevenue.December += revenue;
					chartedCost.December += cost;
					break;
			}
		});
		// Object.values(charted);
		setTransactionRevenue(chartedRevenue);
		setTransactionCost(chartedCost);
		console.log(transactionCost);
	};

	const options = {
		layout: {
			padding: {
				bottom: 0,
				top: 0,
			},
		},
		scales: {
			xAxes: [
				{
					stacked: true,
					gridLines: {
						display: true,
					},
				},
			],
			yAxes: [
				{
					stacked: false,
				},
			],
		},
		responsive: true,
		legend: {
			display: true,
			position: "top",
			labels: {
				fontColor: "#91929b",
			},
		},
	};
	const data = {
		base: 0,
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
				base: 0,
				label: "Revenue",
				backgroundColor: "rgb(53, 122, 56)",
				borderColor: "rgb(53, 122, 56)",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(53, 122, 56,0.4)",
				hoverBorderColor: "rgb(0,88,101)",

				data: Object.values(transactionRevenue),
				order: 2,
			},
			{
				base: 0,
				label: "Cost",
				backgroundColor: "rgb(255, 16, 47)",
				borderColor: "rgb(178, 16, 47)",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(255, 16, 47,0.4)",
				hoverBorderColor: "rgb(0,88,101)",

				data: Object.values(transactionCost),
			},
		],
		base: 0,
		options: {
			scales: {
				xAxes: [
					{
						type: "time",
						time: { parser: "MMMM" },
						display: true,
						base: 0,
					},
				],
			},
		},
	};
	//* Initializes styling classes
	const classes = useStyles();

	//* Returns JSX to DOM
	return (
		<Grid container>
			<Grid item xs={12}>
				<Bar data={data} width={"700em"} height={"500em"} options={options} />{" "}
			</Grid>
		</Grid>
	);
};

export default Expenses;
