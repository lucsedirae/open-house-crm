//* Dependencies
import React, { useState, useContext, useEffect } from "react";
import { useToasts } from "react-toast-notifications";

//* Material UI components, hooks, and icons
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import AuthContext from "../../context/auth/authContext";

//* Defines styles to be served via makeStyles MUI hook
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

//* Exported component
const ReplyForm = ({ _id, post }) => {
  const authContext = useContext(AuthContext);

  const { user, loadUser } = authContext;

  useEffect(() => {
    loadUser();
  }, []);

  //* react-toast-notifications custom hook
  const { addToast } = useToasts();
  //* Initializes styling classes
  const classes = useStyles();

  const [reply, setReply] = useState({
    body: ""
  });

  const { body } = reply;

  const onChange = (e) => {
    setReply({ ...reply, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.post(
      `http://localhost:8080/api/forum/${_id}`,
      { ...reply, name: user && user.name },
      config
    );

    console.log(res);

    //axios call here
    addToast(`You replied to ${post.name}'s post!`, {
      appearance: "success",
      autoDismiss: true
    });

    setReply({
      body: ""
    });
  };

  //* Returns JSX to DOM
  return (
    <form autoComplete="off" onSubmit={onSubmit} style={{ marginTop: "1rem" }}>
      {/*  <TextField
        variant="outlined"
        required={true}
        type="text"
        id="standard-required"
        label="Name"
        size="small"
        name="name"
        value={name}
        onChange={onChange}
        style={{ marginBottom: "1rem" }}
      /> */}

      <TextField
        fullWidth={true}
        multiline
        rows={3}
        variant="outlined"
        label="Reply here..."
        size="small"
        name="body"
        value={body}
        onChange={onChange}
      />

      <Button
        variant="contained"
        type="submit"
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
          backgroundColor: "#008B8B",
          color: "white",
          fontFamily: "Big Shoulders Display",
          fontSize: "18px",
          fontWeight: "600"
        }}
      >
        Submit
      </Button>
    </form>
  );
};

export default ReplyForm;
