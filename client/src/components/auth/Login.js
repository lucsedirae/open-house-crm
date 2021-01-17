//* Dependencies
import React, { useState, useContext, useEffect } from "react";

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
const Login = (props) => {
  //* Initializes state context
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  //* Deconstructs state context
  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  //* Checks if user is authenticated using stored token
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/dashboard");
    }

    if (error === "Invalid credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  //* Declares state var and method and initializes default state of user
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //* Deconstructs user state
  const { email, password } = user;

  //* Handles change events in form to define user state
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  //* Handles form submit
  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all fields", "danger");
    } else {
      login({
        email,
        password,
      });
    }
  };

  //* Returns JSX to DOM
  return (
    <Container maxWidth="xs">
      <Typography variant="h4">Account Login</Typography>
      <Box>
        <form onSubmit={onSubmit}>
          <TextField
            required
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
            required
            size="small"
            variant="outlined"
            label="password"
            type="password"
            name="password"
            value={password}
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
              href="/register"
              style={{ marginTop: "1rem", marginLeft: "1rem" }}
            >
              Register
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
