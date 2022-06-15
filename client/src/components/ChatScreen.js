import { AppBar, Avatar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

const ChatScreen = () => {
    const { id, name } = useParams()
    return (
        <Box flexGrow={1}>
            <AppBar position="static">
                <Toolbar>
                    <Avatar
                        src={`https://avatars.dicebear.com/api/initials/${name}.svg`}
                        sx={{ width: "32px", height: "32px" }}
                    />
                    <Typography variant='h6'>{name}</Typography>
                </Toolbar>
            </AppBar>

        </Box>
    )
}

export default ChatScreen
