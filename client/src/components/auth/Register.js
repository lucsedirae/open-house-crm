//* Dependencies
import React, { useContext, useState, useEffect } from "react";

//* Material-UI components, hooks, and icons
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";
import CheckIcon from "@material-ui/icons/Check";
import background from "../../img/Subtle-Prism2.svg";

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
    password2: ""
  });
  //* Destructures user state
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
            padding: "3rem",
            paddingBottom: "2.2rem",
            marginTop: "19rem",
            textAlign: "center",
            background: `url(${background})`
          }}
        >
          <Typography
            variant="h4"
            style={{
              fontFamily: "Big Shoulders Display",
              color: "#008B8B",
              fontWeight: "800"
            }}
          >
            Create An Account
          </Typography>

          <form onSubmit={onSubmit}>
            <Input
              size="small"
              variant="standard"
              placeholder="name"
              type="text"
              name="name"
              fullWidth={true}
              value={name}
              onChange={onChange}
              style={{ marginTop: "1rem" }}
              startAdornment={
                <InputAdornment position="start" style={{ color: "#008B8B" }}>
                  <AccountCircle />
                </InputAdornment>
              }
            />
            <Input
              size="small"
              variant="standard"
              placeholder="email"
              type="email"
              name="email"
              fullWidth={true}
              value={email}
              onChange={onChange}
              style={{ marginTop: "3px" }}
              startAdornment={
                <InputAdornment position="start" style={{ color: "#008B8B" }}>
                  <EmailIcon />
                </InputAdornment>
              }
            />
            <Input
              size="small"
              variant="standard"
              placeholder="password"
              type="password"
              name="password"
              fullWidth={true}
              inputProps={{
                minLength: "6"
              }}
              value={password}
              onChange={onChange}
              style={{ marginTop: "3px" }}
              startAdornment={
                <InputAdornment position="start" style={{ color: "#008B8B" }}>
                  <LockIcon />
                </InputAdornment>
              }
            />
            <Input
              size="small"
              variant="standard"
              placeholder="Confirm password"
              type="password"
              name="password2"
              fullWidth={true}
              inputProps={{
                minLength: "6"
              }}
              value={password2}
              onChange={onChange}
              style={{ marginTop: "3px" }}
              startAdornment={
                <InputAdornment position="start" style={{ color: "#008B8B" }}>
                  <CheckIcon />
                </InputAdornment>
              }
            />

            <Button
              variant="contained"
              fullWidth={true}
              type="submit"
              value="Register"
              style={{
                marginTop: "1.5rem",
                backgroundColor: "#008B8B",
                fontSize: "18px",
                fontFamily: "Big Shoulders Display",
                fontWeight: "600",
                color: "white"
              }}
            >
              Register
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Register;
