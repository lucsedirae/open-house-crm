//* Dependencies
import React, { useEffect, useState, useContext } from "react";

//* Material UI components, hooks, and icons
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Posts from "../forum/Posts";
import axios from "axios";

import AuthContext from "../../context/auth/authContext";

//* Custom components
import NavPanel from "../layout/NavPanel";

//* Defines styles to be served via makeStyles MUI hook
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    marginBottom: "1rem"
  },
  header: {
    textAlign: "center",
    marginTop: "5rem",
    marginBottom: "1rem",
    fontFamily: "Big Shoulders Display",
    fontWeight: "700"
  }
}));

//* Exported component
const Forum = () => {
  //* Initializes styling classes
  const classes = useStyles();

  const authContext = useContext(AuthContext);

  /* let userName = isAuthenticated ? user.name : user; */

  const { user, loadUser } = authContext;

  const [post, setPost] = useState({
    title: "",
    body: ""
  });

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadUser();
    getPosts();
  }, []);

  const getPosts = async () => {
    const res = await axios.get("/api/forum");

    setPosts(res.data);
  };

  const { title, body } = post;

  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/forum", {
      ...post,
      name: user && user.name
    });
    console.log(res.data);

    setPosts([res.data, ...posts]);
    setPost({
      title: "",
      body: ""
    });
  };

  //* Returns JSX to DOM
  return (
    <Container>
      <Typography variant="h4" className={classes.header}>
        Agent Forum
      </Typography>

      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item xs={12} sm={12} md={8} align="center">
          <NavPanel />
          <form className={classes.root} autoComplete="off">
            <Box style={{ textAlign: "center" }}>
              <TextField
                fullWidth={true}
                variant="outlined"
                label="Enter a descriptive title..."
                size="small"
                name="title"
                value={title}
                onChange={onChange}
                style={{ marginBottom: "1rem" }}
              />
              <TextField
                variant="outlined"
                label="What's on your mind?"
                multiline
                rows={5}
                size="small"
                fullWidth={true}
                name="body"
                value={body}
                onChange={onChange}
              />
            </Box>
            <Button
              variant="contained"
              type="submit"
              fullWidth={true}
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
                backgroundColor: "#008B8B",
                color: "white",
                fontFamily: "Big Shoulders Display",
                fontSize: "18px",
                fontWeight: "600"
              }}
              onClick={onSubmit}
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>

      <Posts posts={posts} />
    </Container>
  );
};

export default Forum;
