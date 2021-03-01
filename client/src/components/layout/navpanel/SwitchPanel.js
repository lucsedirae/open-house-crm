//* Dependencies
import React from "react";

//* Material-UI components, hooks, and icons
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";

const SwitchPanel = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkB: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Grid container spacing={3} alignItems="center" justify="center">
      <Grid item xs={12} md={6} align="center">
        <Typography variant="body1" display="inline">
          Floating navigation panel:
        </Typography>
        <Switch
          checked={state.checkedA}
          onChange={handleChange}
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </Grid>
      <Grid item xs={12} md={6} align="center">
        <Typography variant="body1" display="inline">
          Dark mode:
        </Typography>
        <Switch
          disabled
          checked={state.checkedB}
          onChange={handleChange}
          name="checkedB"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </Grid>
    </Grid>
  );
};

export default SwitchPanel;
