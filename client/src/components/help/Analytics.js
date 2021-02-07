//* Dependencies
import React, { Fragment } from "react";

//* Material UI components, hooks, and icons
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

//* Exported component
const Analytics = () => {
  return (
    <div id="analytics">
      <IconButton href="#">
        <ExpandLessIcon />
      </IconButton>

      <Card style={{ padding: "1rem" }}>
        <Typography variant="h5" style={{ margin: ".5rem" }}>
          Analytics Module
        </Typography>
        <img
          src="/img/charts.gif"
          alt="Gif of agent forum in action"
          style={{ borderRadius: "5px", boxShadow: "3px 3px 5px" }}
        />
        <CardContent>
          <Typography variant="body1">
            The Analytics Module will display stored user transaction data.
            Users enter their transaction and inventory data in the{" "}
            <a href="#transactions">transactions module</a> or{" "}
            <a href="#inventory">inventory module</a> and it is charted here,
            displaying various views of the user's business metrics. Graphs are
            independently displayed in an accordion system to improve mobile
            user experience and keep the interface clean and free of
            distraction.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
