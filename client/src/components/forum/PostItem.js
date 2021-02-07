import React from "react";
import Replies from "./Replies";
import Badge from "@material-ui/core/Badge";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ReplyForm from "./ReplyForm";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Moment from "react-moment";

const PostItem = ({ post }) => {
  const { name, title, body, replies, _id, date } = post;

  return (
    <div>
      <Container>
        <Grid container spacing={3} alignItems="center" justify="center">
          <Grid item xs={12} sm={6} md={8}>
            <h1>{title}</h1>
            <Moment format="MM/DD/YYYY">{date}</Moment>
            <h4>
              <AccountBoxIcon fontSize="large" /> {name}
            </h4>
            <p>{body}</p>
            <Replies replies={replies} />
            <ReplyForm _id={_id} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PostItem;
