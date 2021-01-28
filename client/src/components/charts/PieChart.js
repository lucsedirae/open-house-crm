import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Line, Pie } from "react-chartjs-2";

const data = {
	labels: ["Travel", "Materials", "Other"],
	datasets: [
		{
			data: [300, 50, 100],
			backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
			hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
		},
	],
};

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
const PieChart = () => {
	//* Initializes styling classes
	const classes = useStyles();

	//* Returns JSX to DOM
	return (
		<div>
			<h2>Expenses Distribution</h2>
			<Pie data={data} width={200} height={200} />
		</div>
	);
};

export default PieChart;
