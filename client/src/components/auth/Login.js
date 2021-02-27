//* Dependencies
import React, { useState, useContext, useEffect } from "react";
import styles from "./auth.module.css";

//* Material-UI components, hooks, and icons
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";

//* Custom components
import Footer from "../layout/Footer";

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
    <div className="landing">
      <Container maxWidth="xs">
        <div className={styles.box}>
          <Typography variant="h4" className={styles.title}>
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
              className={styles.button}
            >
              Log In
            </Button>
          </form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;
