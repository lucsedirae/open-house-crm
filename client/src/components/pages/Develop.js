//* Dependencies
import React, { Fragment, useState, useEffect } from "react";
import API from "../../utils/GH_API";
import styles from "./pages.module.css";

//* Material-UI components, hooks, and icons
import Badge from "@material-ui/core/Badge";
import Chip from "@material-ui/core/Chip";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CommentIcon from "@material-ui/icons/Comment";
import GitHubIcon from "@material-ui/icons/GitHub";

//* Exported component
const Develop = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    loadIssues();
  }, []);

  function loadIssues() {
    API.getIssues().then((issues) => {
      setIssues(issues);
      console.table(issues);
    });
  }

  //* Returns JSX to DOM
  return (
    <Fragment>
      <Typography variant="h4" align="center">
        Open GitHub Issues
      </Typography>
      <Container className={styles.root}>
        {issues.map((issue) => (
          <Paper className={styles.control}>
            <Grid container spacing={2} className={styles.grid - container}>
              <Grid item xs>
                <Typography variant="h6">
                  <strong>Issue</strong>: {issue.title}
                </Typography>
                <Typography variant="body1">
                  <strong>Owner</strong>:{" "}
                  <a
                    href={"http://github.com/" + issue.ghUser}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {issue.ghUser}
                  </a>
                </Typography>
              </Grid>
              <Grid item xs>
                <Chip
                  variant="outlined"
                  label={issue.state}
                  size="small"
                  className={styles.badge}
                  style={{ background: "lightgreen" }}
                ></Chip>
                <Badge
                  badgeContent={issue.comments}
                  className={styles.badge}
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
                  rel="noreferrer"
                >
                  <GitHubIcon color="secondary" className={styles.badge} />
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
