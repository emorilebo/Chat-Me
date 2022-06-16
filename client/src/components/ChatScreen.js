import { AppBar, Avatar, Box, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import MessageCard from './MessageCard'

const ChatScreen = () => {
    const { id, name } = useParams()
    return (
        <Box flexGrow={1}>
            <AppBar position="static" sx={{backgroundColor:"white", boxShadow:0,}}>
                <Toolbar>
                    <Avatar
                        src={`https://avatars.dicebear.com/api/initials/${name}.svg`}
                        sx={{ width: "32px", height: "32px", mr:2 }}
                    />
                    <Typography variant='h6' color="black">{name}</Typography>
                </Toolbar>
            </AppBar>

            <Box backgroundColor="#f5f5f5" height="80vh">
                <MessageCard text='Hello Emori' date='12:20'/>
                <MessageCard text='Hello Emori' date='12:20'/>
                <MessageCard text='Hello Emori' date='12:20'/>
            </Box>
            <TextField
                placeholder='Enter a message'
                variant='standard'
                fullWidth
                multiline
                rows={2}
            />

        </Box>
    )
}

export default ChatScreen
