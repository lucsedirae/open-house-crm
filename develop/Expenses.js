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
  const [annualTrxData, setAnnualTrxData] = useState({
    jan: 0,
    feb: null,
    mar: null,
    april: null,
    may: null,
    june: null,
    july: null,
    aug: null,
    sept: null,
    oct: null,
    nov: null,
    dec: null,
  });

  const [transactionData, setTransactionData] = useState([]);

  useEffect(() => {
    getTransactionCost();
    getTransactionData();
  }, []);

  const getTransactionCost = async () => {
    const res = await axios.get("/api/transactions");
    setTransactionData(
      res.data.map((transaction) => {
        return {
          date: moment.utc(transaction.dateOpened).format("MMM"),
          cost: transaction.cost,
        };
      })
    );

    // const transactionData = res.data.map((transaction) => {
    // 	return {
    // 		date: moment.utc(transaction.dateOpened).format("MMM"),
    // 		cost: transaction.cost,
    // 	};
    // });
    // .then(
    // 	transactionData.map((transaction) => {
    // 		switch (transaction.date) {
    // 			case "Jan":
    // 				setAnnualTrxData(
    // 					{ ...annualTrxData, jan: +transaction.cost },
    // 					console.log(annualTrxData)
    // 				);
    // 			default:
    // 				console.log("Your code sucks");
    // 		}
    // 	})
    // );

    // console.log(moment(transactionData.dateOpened).format("MMM"));

    // for (let i = 0; i < transactionData.length; i++) {
    // 	const month = moment.utc(transactionData[i].dateOpened).format("MMMM");
    // 	const cost = transactionData[i].cost;
    // 	// months[month] += cost;
    // 	console.log(month);
    // 	console.log(cost);
    // }

    // setTransaction({
    // 	months: cost,
    // });

    // console.log(res.data);
    // setTransaction(cost);
    // console.log(transaction);
  };

  const getTransactionData = async () => {
    const res = await axios.get("/api/transactions");
    transactionData != null && transactionData.length != 0
      ? transactionData.map((transaction) => {
          switch (transaction.date) {
            case "Jan":
              setAnnualTrxData(
                { ...annualTrxData, jan: +transaction.cost },
                console.log(annualTrxData)
              );
            default:
              console.log("Your code sucks");
          }
        })
      : "loading...";
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
