import { Box } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Welcome from '../components/Welcome'

const AllRoutes = ()=>{
  return (
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/:id/:name" element={<Welcome/>}/>
    </Routes>
  )
}

const HomeScreen = () => {
  return (
    <Box display="flex">
        <Sidebar/>
        <AllRoutes/>
    </Box>
  )
}

export default HomeScreen