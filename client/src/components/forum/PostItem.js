import React, { useState, useEffect } from "react";
import Replies from "./Replies";
import axios from "axios";
import Badge from "@material-ui/core/Badge";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ReplyForm from "./ReplyForm";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Moment from "react-moment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const PostItem = ({ post }) => {
  const { name, title, body, replies, _id, date, likes } = post;

  const [likesCount, setLikesCount] = useState(0);

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setLikesCount(likes);
  }, []);

  const incrementLikes = async () => {
    console.log(post);
    const res = await axios.put(`/api/forum/${_id}`);
    console.log(res);

    setLikesCount(res.data.likes);
  };

  const decrementLikes = async () => {
    console.log(post);
    const res = await axios.put(`/api/forum/dec/${_id}`);
    console.log(res);

    setLikesCount(res.data.likes);
  };

  const handleClick = () => {
    isChecked ? setIsChecked(false) : setIsChecked(true);

    if (!isChecked) {
      incrementLikes();
    } else if (isChecked) {
      decrementLikes();
    } else {
      return;
    }
  };

  return (
    <div>
      <Container>
        <Grid container spacing={3} alignItems="center" justify="center">
          <Grid item xs={12} sm={6} md={8}>
            <h1>{title}</h1>
            <Moment format="MM-DD-YYYY">{date}</Moment>
            <h4>
              <AccountBoxIcon fontSize="large" /> {name}
            </h4>
            <p>{body}</p>
            <Replies replies={replies} />
            <FormControlLabel
              onClick={handleClick}
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={isChecked ? <Favorite /> : <FavoriteBorder />}
                  name="checkedH"
                />
              }
              label={`${likesCount} likes`}
            />
            <ReplyForm _id={_id} post={post} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PostItem;
