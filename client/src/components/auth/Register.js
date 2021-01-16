//* Dependencies
import React, { useState } from "react";

//* Material-UI components, hooks, and icons
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Register submit");
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4">
        Account Register
      </Typography>
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
