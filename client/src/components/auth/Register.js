//* Dependencies
import React, { useContext, useState, useEffect } from "react";

//* Material-UI components, hooks, and icons
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

//* State context
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

//* Exported component
const Register = (props) => {
  //* Initializes state context
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  //* Deconstructs state context
  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  //* Checks if user is authenticated using stored token
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/dashboard");
    }

    if (error === "User already exists ") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  //* Establishes local user state
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  //* Deconstructs user state 
  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  //* Handles form submit
  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  //* Returns JSX to DOM
  return (
    <Container maxWidth="xs">
      <Typography variant="h4">Account Register</Typography>
      <Box>
        <form onSubmit={onSubmit}>
          <TextField
            size="small"
            variant="outlined"
            label="name"
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            style={{ marginTop: "1rem" }}
          />
          <TextField
            size="small"
            variant="outlined"
            label="email"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            style={{ marginTop: "3px" }}
          />
          <TextField
            size="small"
            variant="outlined"
            label="password"
            type="password"
            name="password"
            inputProps={{
              minLength: "6",
            }}
            value={password}
            onChange={onChange}
            style={{ marginTop: "3px" }}
          />
          <TextField
            size="small"
            variant="outlined"
            label="Confirm password"
            type="password2"
            name="password2"
            inputProps={{
              minLength: "6",
            }}
            value={password2}
            onChange={onChange}
            style={{ marginTop: "3px" }}
          />
          <Box>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              value="Register"
              style={{ marginTop: "1rem", marginLeft: "1rem" }}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              href="/login"
              style={{ marginTop: "1rem", marginLeft: "1rem" }}
            >
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
