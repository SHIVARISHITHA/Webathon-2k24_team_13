import React from 'react'
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";
// import Notifications from "./pages/Notifications";
// import Profile from './pages/Profile';
// import {Routes,Route} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";


function Navbar() {
    const navigate=useNavigate();
    const isnavigate=()=>{
        navigate(`/Profile`)

    }
    const isnavigate1=()=>{
        navigate(`/Login`)

    }
    const isnavigate3=()=>{
      navigate(`/Settings`)

  }
	
	const isnavigate5=()=>{
		navigate('/Dashboard')
	}
  return (
    <div><div className="navbar bg-slate-200 pb-4 fixed w-full z-50 top-0 left-0 ">
    <div className="navbar-start">
     <a className="navbar-item text-slate-200 text-xl"><button onClick={isnavigate5}>AlumConnect</button></a>
    </div>
    <div className="navbar-end">
      <div class="dropdown">
	<label class="btn bg-slate-600 my-2  " tabIndex="0"><TfiMenu style={{ fontSize: "1.75rem" , color:"white"}} /></label>
	<div class="dropdown-menu">
  <label htmlFor="modal-3" className="btn btn-sm btn-circle btn-ghost text-slate-800 absolute right-2 top-2">✕</label>
  <a className="navbar-item text-slate-800 text-xl"><button onClick={isnavigate}>My profile</button></a>
  <a className="navbar-item text-slate-800 text-xl"><button onClick={isnavigate3}>FAQ's</button></a>

      <a className="navbar-item text-slate-800 text-xl font-weight-bold"><button onClick={isnavigate1}>Logout</button></a>
	</div>
</div>
    </div>
  </div>
  </div>
  )
}

export default Navbar