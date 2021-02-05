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

	useEffect(() => {
		getTransactionCost();
	}, []);
	const getTransactionCost = async () => {
		const res = await axios.get("http://localhost:3000/api/transactions");

		const transactionData = res.data;
		console.log(transactionData);

		// .map((transaction) => {
		// 	return {
		// 		x: moment.utc(transaction.dateOpened).format("MMMM"),
		// 		y: transaction.cost,
		// 	};
		// });

		const months = [
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

		for (let i = 0; i < transactionData.length; i++) {
			let month = moment.utc(transactionData[i].dateOpened).format("MMMM");
			let cost = transactionData[i].cost;
			months[month] += cost;
			console.log(months);
		}

		// console.log(res.data);
		setTransaction(months);
		// console.log(transaction);
	};

	const data = {
		labels: transaction,
		datasets: [
			{
				label: "Expenses",
				backgroundColor: "rgb(255,0,0)",
				borderColor: "rgb(11,227,210)",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(255,0,54,0.4)",
				hoverBorderColor: "rgb(0,88,101)",
				data: transaction.map((transactions) => {
					return transactions.y;
				}),
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
