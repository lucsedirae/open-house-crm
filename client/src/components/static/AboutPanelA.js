//* Dependencies and hooks
import React, { Fragment } from "react";

//* Material UI components, hooks, and icons
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const AboutPanelA = () => {
  return (
    <Paper variant="outlined" style={{ padding: "10px" }}>
      <Typography variant="h4">Open for business</Typography>
      <Typography variant="body1">
        Open House is an open source platform for building full-featured
        customer relationship management dashboards and utilities quickly.
        Designed with modularity as a key priority, Open House allows developers
        to customize the range of services offered and adjust fees accordingly.
        Developed under the GNU General Public License, Open House is community
        developed and maintained.
        <br />
        <strong>Bottom line:</strong> think WordPress for business dashboards.
      </Typography>
    </Paper>
  );
};

export default AboutPanelA;
