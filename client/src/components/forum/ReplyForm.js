//* Dependencies
import React, { useState, useContext } from "react";
import { useToasts } from "react-toast-notifications";

//* Material UI components, hooks, and icons
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

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
const ReplyForm = ({ _id }) => {
  //* react-toast-notifications custom hook
  const { addToast } = useToasts();
  //* Initializes styling classes
  const classes = useStyles();

  const [reply, setReply] = useState({
    name: "",
    body: ""
  });

  const { name, body } = reply;

  const onChange = (e) => {
    setReply({ ...reply, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.post(
      `http://localhost:8080/api/forum/${_id}`,
      reply,
      config
    );

    console.log(res);

    //axios call here
    addToast("You posted a comment!", {
      appearance: "success",
      autoDismiss: true
    });

    setReply({
      name: "",
      body: ""
    });
  };

  //* Returns JSX to DOM
  return (
    <form className={classes.root} autoComplete="off" onSubmit={onSubmit}>
      <Typography
        variant="h5"
        style={{
          textAlign: "center",
          fontFamily: "Big Shoulders Display",
          fontSize: "25px",
          fontWeight: "600"
        }}
      >
        Add Comment
      </Typography>

      <Box style={{ textAlign: "center" }}>
        <TextField
          variant="standard"
          required={true}
          type="text"
          id="standard-required"
          label="Name"
          size="small"
          helperText="Required"
          name="name"
          value={name}
          onChange={onChange}
        />

        <TextField
          required={true}
          variant="standard"
          label="Contact Type"
          size="small"
          name="body"
          helperText="Required"
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
      >
        Submit
      </Button>
    </form>
  );
};

export default ReplyForm;
