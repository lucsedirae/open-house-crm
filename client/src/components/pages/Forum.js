//* Dependencies
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
import styles from "./pages.module.css";

//* Material UI components, hooks, and icons
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

//* State context
import AuthContext from "../../context/auth/authContext";

//* Custom components
import NavPanel from "../layout/NavPanel";
import Posts from "../forum/Posts";

//* Exported component
const Forum = () => {
  const { addToast } = useToasts();

  const authContext = useContext(AuthContext);

  const { user, loadUser } = authContext;

  const [post, setPost] = useState({
    title: "",
    body: "",
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
      name: user && user.name,
    });
    console.log(res.data);

    setPosts([res.data, ...posts]);
    setPost({
      title: "",
      body: "",
    });

    addToast(`Your post was successful!`, {
      appearance: "success",
      autoDismiss: true,
    });
  };

  //* Returns JSX to DOM
  return (
    <Container>
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          align="center"
          style={{ marginTop: "5rem" }}
        >
          <NavPanel />
          <form className={styles.root} autoComplete="off">
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
              className={styles.submitButton}
              onClick={onSubmit}
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>

      <Posts posts={posts} setPosts={setPosts} />
    </Container>
  );
};

export default Forum;
