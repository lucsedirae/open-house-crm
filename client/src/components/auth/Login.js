//* Dependencies
import React, { useState, useContext, useEffect } from "react";

//* Material-UI components, hooks, and icons
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import background from "../../img/Subtle-Prism2.svg";

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
    password: ""
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
        password
      });
    }
  };

  //* Returns JSX to DOM
  return (
    <div className="landing">
      <Container maxWidth="xs">
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "1rem",
            border: "1px solid #008B8B ",
            padding: "4rem",
            paddingBottom: "2.5rem",
            marginTop: "19rem",
            textAlign: "center",
            background: `url(${background})`
          }}
        >
          <Typography
            variant="h4"
            style={{
              textAlign: "center",
              fontFamily: "Big Shoulders Display",
              color: "#008B8B",
              fontWeight: "800"
            }}
          >
            Account Login
          </Typography>
          <form onSubmit={onSubmit}>
            <Input
              required
              size="small"
              variant="standard"
              placeholder="email"
              type="email"
              name="email"
              fullWidth={true}
              value={email}
              onChange={onChange}
              style={{ marginTop: "8px" }}
              startAdornment={
                <InputAdornment position="start" style={{ color: "#008B8B" }}>
                  <AccountCircle />
                </InputAdornment>
              }
            />
            <Input
              required
              size="small"
              variant="standard"
              placeholder="password"
              type="password"
              name="password"
              fullWidth={true}
              value={password}
              onChange={onChange}
              style={{ marginTop: "8px" }}
              startAdornment={
                <InputAdornment position="start" style={{ color: "#008B8B" }}>
                  <LockIcon />
                </InputAdornment>
              }
            />

            <Button
              variant="contained"
              fullWidth={true}
              color="primary"
              type="submit"
              value="Register"
              style={{
                marginTop: "1.5rem",
                backgroundColor: "#008B8B",
                fontSize: "18px",
                fontFamily: "Big Shoulders Display",
                fontWeight: "600"
              }}
            >
              Log In
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
