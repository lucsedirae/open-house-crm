//* Dependencies
import React, { useState, useContext, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import axios from "axios";
import styles from "./forum.module.css"

//* Material UI components, hooks, and icons
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

//* State context
import AuthContext from "../../context/auth/authContext";

//* Exported component
const ReplyForm = ({ _id, post, postReplies, setPostReplies }) => {
  const authContext = useContext(AuthContext);

  const { user, loadUser } = authContext;

  useEffect(() => {
    loadUser();
  }, []);

  //* react-toast-notifications custom hook
  const { addToast } = useToasts();

  const [reply, setReply] = useState({
    body: "",
  });

  const { body } = reply;

  const onChange = (e) => {
    setReply({ ...reply, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      `/api/forum/${_id}`,
      { ...reply, name: user && user.name },
      config
    );

    setPostReplies([...postReplies, res.data]);

    console.log(res);

    addToast(`You replied to ${post.name}'s post!`, {
      appearance: "success",
      autoDismiss: true,
    });

    setReply({
      body: "",
    });
  };

  //* Returns JSX to DOM
  return (
    <form autoComplete="off" onSubmit={onSubmit} style={{ marginTop: "1rem" }}>
      <TextField
        fullWidth={true}
        multiline
        rows={3}
        variant="outlined"
        label={`Reply to ${post.name.split(" ")[0]}'s post...`}
        size="small"
        name="body"
        value={body}
        onChange={onChange}
      />

      <Button
        variant="contained"
        type="submit"
        className={styles.button}
      >
        Submit
      </Button>
    </form>
  );
};

export default ReplyForm;
