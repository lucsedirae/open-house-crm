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
	const [annualTrxData, setAnnualTrxData] = useState(null);

	useEffect(() => {
		// getTransactionCost();
		getTransactionData();
	}, []);

	// const getTransactionCost = async () => {
	// 	const res = await axios.get("/api/transactions");
	// 	setTransactionData(
	// 		res.data.map((transaction) => {
	// 			return {
	// 				date: moment.utc(transaction.dateOpened).format("MMM"),
	// 				cost: transaction.cost,
	// 			};
	// 		})
	// 	);
	// };

	const getTransactionData = async () => {
		const res = await axios.get("/api/transactions");
		setTransactionData(
			res.data.map((transaction) => {
				return {
					date: moment.utc(transaction.dateOpened).format("MMM"),
					cost: transaction.cost,
				};
			})
		);
		transactionData != null && transactionData.length != 0
			? transactionData.map((transaction) => {
					switch (transaction.date) {
						case "Jan":
							setAnnualTrxData({
								date: transaction.date,
								cost: +transactionData.cost,
								...annualTrxData,
							});
						case "Feb":
							setAnnualTrxData({
								date: transaction.date,
								feb: +transaction.cost,
								...annualTrxData,
							});
						case "Mar":
							setAnnualTrxData({
								date: transaction.date,
								mar: +transaction.cost,
								...annualTrxData,
							});
						case "Apr":
							setAnnualTrxData({
								date: transaction.date,
								apr: +transaction.cost,
								...annualTrxData,
							});
						case "May":
							setAnnualTrxData({
								date: transaction.date,
								may: +transaction.cost,
								...annualTrxData,
							});
						case "Jun":
							setAnnualTrxData({
								date: transaction.date,
								jun: +transaction.cost,
								...annualTrxData,
							});
						case "Jul":
							setAnnualTrxData({
								date: transaction.date,
								jul: +transaction.cost,
								...annualTrxData,
							});
						case "Aug":
							setAnnualTrxData({
								date: transaction.date,
								aug: +transaction.cost,
								...annualTrxData,
							});
						case "Sep":
							setAnnualTrxData({
								date: transaction.date,
								sep: +transaction.cost,
								...annualTrxData,
							});
						case "Oct":
							setAnnualTrxData({
								date: transaction.date,
								oct: +transaction.cost,
								...annualTrxData,
							});
						case "Nov":
							setAnnualTrxData({
								date: transaction.date,
								nov: +transaction.cost,
								...annualTrxData,
							});
						case "Dec":
							setAnnualTrxData({
								date: transaction.date,
								dec: +transaction.cost,
								...annualTrxData,
							});
						default:
							// console.log(
							// 	transactionData.map((transaction) => {
							// 		console.log(transaction.date, transaction.cost);
							// 	}),
							transactionData.map(
								(transaction) => {
									console.log(transaction.date, transaction.cost);
								},
								// console.log(transaction),
								console.log(annualTrxData)
							);
					}
			  })
			: "loading...";
	};

	console.log(annualTrxData);

	const data = {
		labels: transactionData.map((transactions) => {
			return transactions.date;
		}),
		datasets: [
			{
				label: "Expenses",
				backgroundColor: "rgb(255,0,0)",
				borderColor: "rgb(11,227,210)",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(255,0,54,0.4)",
				hoverBorderColor: "rgb(0,88,101)",
				data: annualTrxData,
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
