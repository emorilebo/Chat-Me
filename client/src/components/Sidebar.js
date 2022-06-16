import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import UserCard from "./UserCard";
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  const users = [
    { id: 1, firstName: "Godfrey", lastName: "Lebo" },
    { id: 2, firstName: "Francis", lastName: "Ekpan" },
    { id: 3, firstName: "Stella", lastName: "Thomas" },
  ];
  return (
    <Box
      backgroundColor="#f7f7f7"
      height="100vh"
      width="250px"
      padding="10px"
    >
      <Stack direction="row" justifyContent="space-between">
      <Typography variant="h6"> Raeven </Typography>
      <LogoutIcon/>
      </Stack>
      <Divider />
      {users.map((item) => {
        return <UserCard key={item.id} item={item} />;
      })}
    </Box>
  );
};

export default Sidebar;
