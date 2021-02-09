import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Line, Pie } from "react-chartjs-2";
import axios from "axios";
import moment from "moment";

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

const transactionTypes = {
	Listing: 0,
	Sale: 0,
	Referral: 0,
};

//* Exported component
const PieChart = () => {
	//* Initializes styling classes
	const classes = useStyles();

	useEffect(() => {
		getTransactionData();
	}, []);

	const getTransactionData = async () => {
		const res = await axios.get("/api/transactions");
		res.data.map((transactions) => {
			let type = transactions.type;
			let cost = transactions.cost;
			switch (type) {
				case "Listing":
					return (transactionTypes.Listing += cost);
				case "Sale":
					return (transactionTypes.Sale += cost);
				case "Referral":
					return (transactionTypes.Referral += cost);
			}
		});
		console.log(transactionTypes);
		console.log(Object.values(transactionTypes));
	};

	const data = {
		labels: ["Listing", "Sale", "Referral"],
		datasets: [
			{
				data: Object.values(transactionTypes),
				backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
				hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
			},
		],
	};

	//* Returns JSX to DOM
	return (
		<div>
			<Pie data={data} />
		</div>
	);
};

export default PieChart;
