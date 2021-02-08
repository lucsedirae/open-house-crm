//* Dependencies
import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

import moment from "moment";

//Import Chart Component
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
const Expenses = () => {
	const [transactionData, setTransactionData] = useState({});

	useEffect(() => {
		getTransactionData();
	}, []);

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

	const getTransactionData = async () => {
		const res = await axios.get("/api/transactions");
		const theTransactions = [];
		res.data.map((transactions) => {
			console.log(transactions.revenue);
		});
		res.data.map((transactions) => {
			let month = moment.utc(transactions.dateOpened).format("MMMM");
			let revenue = transactions.revenue;
			console.log(transactions);

			switch (month) {
				case "January":
					return (charted.January += revenue);
				case "February":
					return (charted.February += revenue);
				case "March":
					return (charted.March += revenue);
				case "April":
					return (charted.April += revenue);
				case "May":
					return (charted.May += revenue);
				case "June":
					return (charted.June += revenue);
				case "July":
					return (charted.July += revenue);
				case "August":
					return (charted.August += revenue);
				case "September":
					return (charted.September += revenue);
				case "October":
					return (charted.October += revenue);
				case "November":
					return (charted.November += revenue);
				case "December":
					return (charted.December += revenue);
			}
		});
		console.log(Object.values(charted));
		Object.values(charted);
		setTransactionData(charted);
	};
	console.log(transactionData);

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
				label: "Expenses",
				backgroundColor: "rgb(21, 138, 12)",
				borderColor: "rgb(11,227,210)",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(21, 138, 12,0.4)",
				hoverBorderColor: "rgb(0,88,101)",

				data: Object.values(transactionData),
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
		<div>
			<Bar
				data={data}
				width={"380em"}
				height={"380em"}
				options={{
					maintainAspectRatio: true,
				}}
			/>{" "}
		</div>
	);
};

export default Expenses;
