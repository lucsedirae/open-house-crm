//* Dependencies
import React, { useEffect } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";

//* Material UI components, hooks, and icons
import Grid from "@material-ui/core/Grid";

const transactionTypes = {
  Listing: 0,
  Sale: 0,
  Referral: 0,
  Vendor: 0,
};

//* Exported component
const PieChart = () => {
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
        case "Vendor":
          return (transactionTypes.Vendor += cost);
      }
    });
    console.log(transactionTypes);
    console.log(Object.values(transactionTypes));
  };

  const data = {
    labels: ["Listing", "Sale", "Referral", "Vendor"],
    datasets: [
      {
        data: Object.values(transactionTypes),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#7B1FA2"],
        hoverBackgroundColor: ["#f6685e", "#00b0ff", "#ffcf33", "#9C27B0"],
      },
    ],
  };

  //* Returns JSX to DOM
  return (
    <Grid container>
      <Grid item xs={12}>
        <Pie data={data} xs={12} sm={12} md={6} />
      </Grid>
    </Grid>
  );
};

export default PieChart;
