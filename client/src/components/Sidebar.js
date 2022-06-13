import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import UserCard from './UserCard'

const Sidebar = () => {
    const users = [
        {id:1, firstName:"Godfrey", lastName:"Lebo"},
        {id:2, firstName:"Francis", lastName:"Ekpan"},
        {id:3, firstName:"Stella", lastName:"Thomas"},
    ]
  return (
    <Box>
        <Typography variant="h6"> Raeven </Typography>
        <Divider/>
        {
            users.map(item=>{
                return <UserCard item={item}/>
            })
        }
    </Box>
  )
}

export default Sidebar