//* Dependencies
import React, { useContext, useEffect } from "react";

//* Material UI components, hooks, and icons
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

//* State context
import AuthContext from "../../context/auth/authContext";
import TransactionContext from "../../context/transactions/transactionContext";

import NavPanel from "../layout/NavPanel";
import Revenue from "../charts/Revenue";
import Expenses from "../charts/Expenses";
import PieChart from "../charts/PieChart";
import LineChart from "../charts/LineChart";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		marginBottom: "1rem",
	},
	header: {
		textAlign: "center",
		marginTop: "1rem",
		marginBottom: "1rem",
	},
}));

const ChartsPage = () => {
	//* Initializes styling classes
	const classes = useStyles();

	//* Initializes state
	const authContext = useContext(AuthContext);

	//* Authenticates user token
	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);
	return (
		<Container>
			<Typography variant="h4" className={classes.header}>
				Business Overview
			</Typography>
			<Grid container spacing={3} alignItems="center" justify="center">
				<Grid itemRef xs={12} sm={12} md={8} align="center">
					<NavPanel />
					<Grid
						container
						xs={12}
						sm={12}
						md={12}
						alignItems="center"
						justify="center">
						<Revenue />
						<Expenses />
					</Grid>
					<LineChart />
					<PieChart />
				</Grid>
			</Grid>
		</Container>
	);
};

export default ChartsPage;
