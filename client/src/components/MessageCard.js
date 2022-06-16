import { Box, Typography } from '@mui/material'
import React from 'react'

const MessageCard = ({text, date}) => {
  return (
    <Box display='flex'>
        <Box>
        <Typography variant='subtitle2' backgroundColor="white" padding='5px'>
            {text}
        </Typography>

        <Typography variant='caption'>
            {date}
        </Typography>
    </Box>
    </Box>
  )
}

export default MessageCard
