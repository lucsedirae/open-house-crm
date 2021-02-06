import React from "react";
import Replies from "./Replies";
import Badge from "@material-ui/core/Badge";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";

const PostItem = ({ post }) => {
  const { name, title, body, replies } = post;
  return (
    <div>
      <Container>
        <Grid container spacing={3} alignItems="center" justify="center">
          <Grid item xs={12} sm={6} md={8}>
            <h1>{title}</h1>
            <h4>By {name}</h4>
            <p>{body}</p>
            <Replies replies={replies} />
            <div style={{ marginTop: "1rem" }}>
              <Badge
                badgeContent="1"
                color="primary"
                style={{ marginRight: "1.5rem" }}
              >
                <FavoriteIcon style={{ color: "purple" }} />
              </Badge>
              <Badge badgeContent={replies.length} color="secondary">
                <CommentIcon style={{ color: "orange" }} />
              </Badge>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PostItem;
