import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MockTest from './DropComp/MockTest'
import VideoTut from './DropComp/VideoTut'
import HomePage from './Home/HomePage'
import Register from './RjLog/Register'
import Login from './RjLog/Login'
import HTMLPro from './DropComp/HTMLPro'
import CSSPro from './DropComp/CSSPro'
import JSPro from './DropComp/JSPro'
import ReactPro from './DropComp/ReactPro'
import NodePro from './DropComp/NodePro'
import MERN from './DropComp/MERN'
import MasterCom from './DropComp/MasterCom'

function Routering() {
  return (
    <div>
        <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="/mocktest" element={<MockTest />} />
            <Route path="/videotutorial" element={<VideoTut />} />
            <Route path='master-compitative-programing' element={<MasterCom />} />
            {/* Project */}
            <Route path='/html' element={<HTMLPro />}/>
            <Route path='/css' element={<CSSPro />}/>
            <Route path='/js' element={<JSPro />}/>
            <Route path='/react' element={<ReactPro />}/>
            <Route path='/node' element={<NodePro />}/>
            <Route path='/mern' element={<MERN />}/>


            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    </div>
  )
}

export default Routering