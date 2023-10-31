import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MockTest from './DropComp/MockTest'
import VideoTut from './DropComp/VideoTut'
import HomePage from './Home/HomePage'
import Register from './RjLog/Register'
import Login from './RjLog/Login'

function Routering() {
  return (
    <div>
        <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="/mock" element={<MockTest />} />
            <Route path="/video" element={<VideoTut />} />
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    </div>
  )
}

export default Routering