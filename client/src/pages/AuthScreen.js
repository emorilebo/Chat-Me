import React, { useRef, useState } from "react";
import { Box, Stack, Typography, Button, TextField, Card } from "@mui/material";
import {useMutation} from "@apollo/client"
import { SIGNUP_USER } from "../graphql/mutations";

const AuthScreen = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [formData, setFormData] = useState({});
  const authForm = useRef(null)
  const [signupUser, {data, loading, error}] = useMutation(SIGNUP_USER)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(showLogin){
      //SignInuser
    }else{
      signup
    }
  };
  return (
    <Box
    ref={authForm}
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      <Card variant="outlined" sx={{ padding: "10px" }}>
        <Stack direction="column" spacing={2} sx={{ width: "400px" }}>
          <Typography variant="h5">
            Please {showLogin ? "Login" : "Signup"}{" "}
          </Typography>
          {!showLogin && (
            <>
              <TextField
                name="firstName"
                label="First Name"
                variant="standard"
                onChange={(e) => handleChange(e)}
              />
              <TextField
                name="lastName"
                label="Last Name"
                variant="standard"
                onChange={(e) => handleChange(e)}
              />
            </>
          )}

          <TextField
            name="email"
            label="Email"
            type="email"
            variant="standard"
            onChange={(e) => handleChange(e)}
          />
          <TextField
            name="password"
            type="password"
            label="Password"
            variant="standard"
            onChange={(e) => handleChange(e)}
          />
          <Typography
          textAlign="center"
            variant="subtitle1"
            onClick={() => {
              setShowLogin((preValue) => !preValue);
              setFormData({});
              authForm.current.reset()
            }}
          >
            {showLogin ? "Signup?" : "Login?"}
          </Typography>
          <Button variant="outlined" type="submit">
            {showLogin ? "Login" : "Signup"}
          </Button>
        </Stack>
      </Card>
    </Box>
  );
};

export default AuthScreen;
