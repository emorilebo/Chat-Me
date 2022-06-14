import { Avatar, Stack } from '@mui/material'
import React from 'react'

const UserCard = ({item:{firstName, lastName, id}}) => {
  return (
    <Stack>
    <Avatar
      src={`https://avatars.dicebear.com/api/initials/${firstName} ${lastName}.svg`}
    />

    </Stack>
  )
}

export default UserCard