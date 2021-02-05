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
	const [expenseData, setExpenseData] = useState([]);

	useEffect(() => {
		getTransactionCost();
		expenseDataPusher();
	}, []);
	const getTransactionCost = async () => {
		const res = await axios.get("http://localhost:3000/api/transactions");

		const transactionData = res.data.map((transaction) => {
			return {
				x: moment.utc(transaction.dateOpened).format("MMMM"),
				y: transaction.cost,
			};
		});
		console.log(res.data);
		setTransaction(transactionData);
		console.log(transaction);
	};

	const expenseDataPusher = () => {
		const newExpenseData = transaction.map((transactions) => {
			return {
				x: transactions.x,
				y: transactions.y,
			};
		});
		setExpenseData(newExpenseData);
		console.log(expenseData);
	};

	const data = {
		labels: transaction.map((transactions) => {
			return transactions.x;
		}),
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
