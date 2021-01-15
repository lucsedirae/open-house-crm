//* Dependencies
import React, { Fragment, useState, useEffect } from "react";
import API from "../../utils/GH_API";

//* Material-UI components, hooks, and icons
import Badge from "@material-ui/core/Badge";
import Chip from "@material-ui/core/Chip";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CommentIcon from "@material-ui/icons/Comment";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  gridContainer: {
    flexGrow: 1,
    padding: "1rem",
  },
  badge: {
    marginTop: "0px",
    margin: "6px",
  },
  control: {
    padding: theme.spacing(2),
    margin: "3px",
    background: "silver",
    padding: "3px",
  },
}));

const Develop = () => {
  const [issues, setIssues] = useState([]);
  const [issue, setIssue] = useState({});

  const classes = useStyles();

  useEffect(() => {
    loadIssues();
  }, []);

  function loadIssues() {
    API.getIssues().then((issues) => {
      setIssues(issues);
      console.table(issues);
    });
  }

  return (
    <Fragment>
      <Typography variant="h4" align="center">
        Open GitHub Issues
      </Typography>
      <Container className={classes.root}>
        {issues.map((issue) => (
          <Paper className={classes.control}>
            <Grid container spacing={2} className={classes.gridContainer}>
              <Grid item xs>
                <Typography variant="h6">
                  <strong>Issue</strong>: {issue.title}
                </Typography>
                <Typography variant="body1">
                  <strong>Owner</strong>:{" "}
                  <a href={"http://github.com/" + issue.ghUser} target="_blank">
                    {issue.ghUser}
                  </a>
                </Typography>
              </Grid>
              <Grid item xs>
                <Chip
                  variant="outlined"
                  label={issue.state}
                  size="small"
                  className={classes.badge}
                  style={{ background: "lightgreen" }}
                ></Chip>
                <Badge
                  badgeContent={issue.comments}
                  className={classes.badge}
                  color="primary"
                >
                  <CommentIcon />
                </Badge>
                <IconButton
                  href={
                    "http://github.com/lucsedirae/open-house-crm/issues/" +
                    issue.number
                  }
                  target="_blank"
                >
                  <GitHubIcon color="secondary" className={classes.badge} />
                </IconButton>
                <Typography variant="body1">
                  <strong>Created: </strong>
                  {issue.createdAt}
                </Typography>
                <Typography variant="body1">
                  <strong>Last Updated: </strong>
                  {issue.updatedAt}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography>
                  <strong>Description: </strong>
                  {issue.description}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Container>
    </Fragment>
  );
};

export default Develop;
