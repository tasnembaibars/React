import React from "react";
import {NavLink} from 'react-router-dom';

function Home() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/"><img src="./logo192.png" height={"80px"} width={"80px"}/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink  to='/' style={({ isActive }) => (isActive ? {color: 'black',padding:"15px",fontSize:"25px"} : {color: 'grey',padding:"15px",fontSize:"25px"})}>Home</NavLink>
      </li>
      <li className="nav-item">
      <NavLink  to='/login' style={({ isActive }) => (isActive ? {color: 'black',padding:"15px",fontSize:"25px"} : {color: 'grey',padding:"15px",fontSize:"25px"})}>login</NavLink>
      </li>
  
     
    </ul>
   
  </div>
 <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
</nav>
    </div>
  )
}

export default Home
