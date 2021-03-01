//* Dependencies
import React, { Fragment, useState } from "react";

//* Material UI components, hooks, and icons
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";

//* Exported component
const ForumPosts = () => {
  const [likes, setLikes] = useState(0);

  const updateBadge = () => {
    setLikes(likes + 1);
  };
  return (
    <Container align="center">
      <Paper style={{ padding: ".5rem", width: "50%" }}>
        <Typography variant="h6" align="center" style={{ padding: "1rem" }}>
          Message from --DynamicUserName--
        </Typography>
        <Typography variant="body2" style={{ color: "silver" }}>
          11/20/2020
        </Typography>
        <Divider />
        <Typography variant="body1">
          Bocconcini cheesecake cottage cheese. Bavarian bergkase cow red
          leicester st. agur blue cheese cheese and biscuits croque monsieur
          melted cheese danish fontina. Fromage frais gouda blue castello paneer
          cheese and wine gouda cheesy grin jarlsberg. Cheese and biscuits.
        </Typography>
        <Divider />
        <Typography variant="h6" style={{ padding: "1rem" }}>
          Comments
        </Typography>
        <Divider />

        <Grid container spacing={3} alignItems="center" justify="center">
          <Grid item xs={12} sm={6} md={6} align="center">
            <Typography variant="body1">Sounds great!</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} align="center">
            --DynamicUserName--
          </Grid>
        </Grid>

        <Grid container spacing={3} alignItems="center" justify="center">
          <Grid item xs={12} sm={6} md={6} align="center">
            <Typography variant="body1">
              Call my plumber at 555-555-1234
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} align="center">
            --DynamicUserName--
          </Grid>
        </Grid>

        <Grid container spacing={3} alignItems="center" justify="center">
          <Grid item xs={12} sm={6} md={6} align="center">
            <Typography variant="body1">
              https://somerelevantwebsite.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} align="center">
            --DynamicUserName--
          </Grid>
        </Grid>
        <Divider />
        <Grid
          container
          spacing={3}
          alignItems="center"
          justify="center"
          style={{ marginTop: ".5rem" }}
        >
          <Grid item xs={12} sm={6} md={6} align="center">
            <Badge badgeContent={likes} onClick={updateBadge} color="primary">
              <FavoriteIcon style={{ color: "purple" }} />
            </Badge>
          </Grid>
          <Grid item xs={12} sm={6} md={6} align="center">
            <Badge badgeContent="3" color="secondary">
              <CommentIcon style={{ color: "orange" }} />
            </Badge>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ForumPosts;
