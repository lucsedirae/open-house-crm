//* Dependencies
import React, {
	useContext,
	useEffect,
	Fragment,
	useState,
	useReducer,
} from "react";
import axios from "axios";
import TransactionReducer from "../../context/transactions/transactionReducer";
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
	const [transaction, setTransaction] = useState([]);
	const [transactionData, setTransactionData] = useState([]);
	const [annualTrxData, setAnnualTrxData] = useState([]);

	useEffect(() => {
		getTransactionData();
	}, []);

	// const getTransactionCost = async () => {
	// 	const res = await axios.get("/api/transactions");
	// 	setTransactionData(
	// 		console.log(res.data),
	// 		res.data.map((transactions) => {
	// 			console.log(transactions);
	// 			return {
	// 				date: moment.utc(transactions.dateOpened).format("MMM"),
	// 				cost: transactions.cost,
	// 			};
	// 		})
	// 	);
	// };
	// console.log(transactionData);
	console.log(transactionData);

	const getTransactionData = async () => {
		const res = await axios.get("/api/transactions");
		console.log(res.data);
		const theTransactions = [];
		res.data.map((transactions) => {
			let month = moment.utc(transactions.dateOpened).format("MMMM");
			console.log(month);
			let cost = transactions.cost;
			console.log(transactions.cost);
			let charted = [
				{
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
				},
			];

			switch (month) {
				case "January":
					charted.month += cost;
				case "February":
					charted.month += cost;
				case "March":
					charted.month += cost;
				case "April":
					charted.month += cost;
				case "May":
					charted.month += cost;
				case "June":
					charted.month += cost;
				case "July":
					charted.month += cost;
				case "August":
					charted.month += cost;
				case "September":
					charted.month += cost;
				case "October":
					charted.month += cost;
				case "November":
					charted.month += cost;
				case "December":
					charted.month += cost;
			}
		});
	};

	const data = {
		labels: "",
		datasets: [
			{
				label: "Expenses",
				backgroundColor: "rgb(255,0,0)",
				borderColor: "rgb(11,227,210)",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(255,0,54,0.4)",
				hoverBorderColor: "rgb(0,88,101)",
				data: "",
			},
		],
		options: {
			scales: {
				xAxes: [
					{
						type: "time",
						time: { parser: "MMMM" },
						display: true,
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
