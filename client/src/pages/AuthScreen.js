import React, { useState } from "react";
import { Box, Stack, Typography, Button, TextField, Card } from "@mui/material";

const AuthScreen = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <Box
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
          <Button variant="outlined" type="submit">
            {showLogin ? "Login" : "Signup"}
          </Button>
        </Stack>
      </Card>
    </Box>
  );
};

export default AuthScreen;
