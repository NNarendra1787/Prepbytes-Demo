import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import "../Drop.css"

function LogPro() {
    const name = localStorage.getItem("name");
    const [show, setShow] = useState(localStorage.getItem("loggedIn"))
    const [click, setClick] = useState(false)

    const handleClick = ()=>{
        setClick(true)
    }
    console.log(show, click);

    const navi = useNavigate()

    const handleLogout = ()=>{
        localStorage.clear();
        setShow(!show)
    }

    const RenderProfile = ()=>{
        if(show){
            return (
                <div className='dropdown'>
                    <label className='name'><span className='Name'>{name.slice(0,1).toUpperCase()}</span> Hi {name}</label>
                    <div className="dropdown-content">
                        <div>
                            <NavLink exact to="/dashboard" className="nav-links" onClick={handleClick}>Dashboard</NavLink>
                            <NavLink exact to="/login" className="nav-links" onClick={handleLogout}>Logout</NavLink>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className='silogbtn'>
                    <button onClick={()=> navi("/login")} className='logbtn'>login</button>
                    <button onClick={()=>{navi("/register")}} className='signbtn'>Signup</button>
                </div>
            )
        }
    }

  return (
    <>
        <RenderProfile />
    </>
  )
}

export default LogPro