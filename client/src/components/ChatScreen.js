import { useQuery } from '@apollo/client'
import { AppBar, Avatar, Box, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MessageCard from './MessageCard'


const ChatScreen = () => {
    const { id, name } = useParams()
    const [messages, setMessages] = useState([])

    const {data, loading, error} = useQuery(GET_MSG)

    // const getAllMessages = () =>{
    //     fetch('http://localhost:4000/', {
    //         method:"POST",
    //         headers:{
    //             "Content-Type": 'application/json',
    //             "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1NTM2ODU2NX0.B-FVZb4hvcrk6vHa-lPCzMyRlaH2SwChOXmlAlY6_Y4"
    //         },
    //         body:JSON.stringify({
    //             query:`
    //             query MessagesByUser($receiverId: Int!) {
    //                 messagesByUser(receiverId: $receiverId) {
    //                   id
    //                   text
    //                   receiverId
    //                   senderId
    //                   createdAt
    //                 }
    //               }
    //             `,
    //             variables:{
    //                 "receiverId": 2
    //               }
    //         })
    //     }).then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //         //update state
    //     })
    // }

    // useEffect(()=>{
    //     getAllMessages()
    // }, [])


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

            <Box padding='10px' backgroundColor="#f5f5f5" height="80vh" sx={{overflowY:"auto"}}>
                <MessageCard text='Hello Emori' date='12:20' direction='start'/>
                <MessageCard text='Hello Emori' date='12:20' direction='end'/>
                <MessageCard text='Hello Emori' date='12:20' direction='end'/>
              
                <MessageCard text='Hello Emori' date='12:20' direction='end'/>
                <MessageCard text='Hello Emori' date='12:20' direction='end'/>
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
