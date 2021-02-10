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
		getTransactionCost();
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
					return (chartedRevenue.January += revenue);
				case "February":
					return (chartedRevenue.February += revenue);
				case "March":
					return (chartedRevenue.March += revenue);
				case "April":
					return (chartedRevenue.April += revenue);
				case "May":
					return (chartedRevenue.May += revenue);
				case "June":
					return (chartedRevenue.June += revenue);
				case "July":
					return (chartedRevenue.July += revenue);
				case "August":
					return (chartedRevenue.August += revenue);
				case "September":
					return (chartedRevenue.September += revenue);
				case "October":
					return (chartedRevenue.October += revenue);
				case "November":
					return (chartedRevenue.November += revenue);
				case "December":
					return (chartedRevenue.December += revenue);
			}
		});
		// Object.values(charted);
		setTransactionRevenue(chartedRevenue);
		setTransactionCost(chartedCost);
		console.log(transactionCost);
	};
	const getTransactionCost = async () => {
		const res = await axios.get("/api/transactions");
		const theTransactions = [];

		res.data.map((transactions) => {
			let month = moment.utc(transactions.dateOpened).format("MMMM");
			let cost = transactions.cost;
			console.log(cost);

			switch (month) {
				case "January":
					return (chartedCost.January += cost);
				case "February":
					return (chartedCost.February += cost);
				case "March":
					return (chartedCost.March += cost);
				case "April":
					return (chartedCost.April += cost);
				case "May":
					return (chartedCost.May += cost);
				case "June":
					return (chartedCost.June += cost);
				case "July":
					return (chartedCost.July += cost);
				case "August":
					return (chartedCost.August += cost);
				case "September":
					return (chartedCost.September += cost);
				case "October":
					return (chartedCost.October += cost);
				case "November":
					return (chartedCost.November += cost);
				case "December":
					return (chartedCost.December += cost);
			}
		});
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
