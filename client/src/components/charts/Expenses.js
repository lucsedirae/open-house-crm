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

		res.data.map((transactions) => {
			let month = moment.utc(transactions.dateOpened).format("MMMM");
			let cost = transactions.cost;

			switch (month) {
				case "January":
					return (charted.January += cost);
				case "February":
					return (charted.February += cost);
				case "March":
					return (charted.March += cost);
				case "April":
					return (charted.April += cost);
				case "May":
					return (charted.May += cost);
				case "June":
					return (charted.June += cost);
				case "July":
					return (charted.July += cost);
				case "August":
					return (charted.August += cost);
				case "September":
					return (charted.September += cost);
				case "October":
					return (charted.October += cost);
				case "November":
					return (charted.November += cost);
				case "December":
					return (charted.December += cost);
			}
		});
		Object.values(charted);
		setTransactionData(charted);
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
				label: "Expenses",
				backgroundColor: "rgb(255,0,0)",
				borderColor: "rgb(11,227,210)",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(255,0,54,0.4)",
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
