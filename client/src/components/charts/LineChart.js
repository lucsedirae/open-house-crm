//* Dependencies
import React, { useContext } from "react";
import PropTypes from "prop-types";

//* Material UI components, hooks, and icons
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import CustomizedDialogs from "../modals/MapModal";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import FaceIcon from "@material-ui/icons/Face";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

//* State context

import { Line } from "react-chartjs-2";

//* Dummy Data
const data = {
	labels: ["January", "February", "March", "April", "May", "June"],
	datasets: [
		{
			label: "Dataset",
			backgroundColor: "rgb(21, 138, 12)",
			borderColor: "rgb(11,227,210)",
			borderWidth: 1,
			hoverBackgroundColor: "rgba(255,0,54,0.4)",
			hoverBorderColor: "rgb(0,88,101)",
			data: [50, -10, 35, 15, 10, 20, 25],
		},
	],
};

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
const LineChart = () => {
	//* Initializes styling classes
	const classes = useStyles();

	//* Returns JSX to DOM
	return (
		<div>
			<h2>Profit Margin</h2>
			<Line data={data} width={200} height={200} />
		</div>
	);
};

export default LineChart;
