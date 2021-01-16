//* Dependencies
import React, { useState } from "react";

//* Material-UI components, hooks, and icons
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Login submit");
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4">Account Login</Typography>
      <Box>
        <form onSubmit={onSubmit}>
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
      {/* JD-1/16/21 Delete this button and typography once authentication is completely built out */}
      <Button
        href="/dashboard"
        variant="contained"
        style={{ marginTop: "3rem" }}
      >
        Temporary access to dashboard
      </Button>
      <Typography variant="h5">
        This button to be deleted upon completion of authentication integration
      </Typography>
    </Container>
  );
};

export default Login;
