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
// import MasterCom from './DropComp/MasterCom'
import Cart from './Cart/Cart'
import ElevationA from './DropComp/Elevation'
import FullStackProgram from './DropComp/FullStack'
import MCProgram from './DropComp/MasterPro'
import SecHom from './Home/SecHom'

function Routering() {
  return (
    <div>
        <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="sec" element={<SecHom />} />
            <Route path="/mocktest" element={<MockTest />} />
            <Route path="/videotutorial" element={<VideoTut />} />
            <Route path='/master-compitative-programing' element={<MCProgram />} />
            <Route path="/elevation" element={<ElevationA />} />
            <Route path='/full-stack' element={<FullStackProgram />}/>
            {/* Project */}
            <Route path='/html' element={<HTMLPro />}/>
            <Route path='/css' element={<CSSPro />}/>
            <Route path='/js' element={<JSPro />}/>
            <Route path='/react' element={<ReactPro />}/>
            <Route path='/node' element={<NodePro />}/>
            <Route path='/mern' element={<MERN />}/>


            <Route path='/dashboard' element={<Cart />} />
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    </div>
  )
}

export default Routering