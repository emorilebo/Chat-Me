import React, { useState } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";

const AuthScreen = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
        ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Box>
      <Stack>
        <Typography variant="h5">Please Signup</Typography>
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
        <Button variant="outlined">Submit</Button>
      </Stack>
    </Box>
  );
};

export default AuthScreen;
