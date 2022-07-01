import React from 'react';
import { Link,NavLink } from "react-router-dom";

function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg ">
  <a className="navbar-brand" href="/"><img src="./logo.png" height={"80px"} width={"80px"}/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink  to='/' style={({ isActive }) => (isActive ? {color: 'red',padding:"15px",fontSize:"25px"} : {color: 'white',padding:"15px",fontSize:"25px"})}>Home</NavLink>
      </li>
      <li className="nav-item">
      <NavLink  to='/about' style={({ isActive }) => (isActive ? {color: 'red',padding:"15px",fontSize:"25px"} : {color: 'white',padding:"15px",fontSize:"25px"})}>About</NavLink>
      </li>
      <li className="nav-item">
      <NavLink  to='/movies' style={({ isActive }) => (isActive ? {color: 'red',padding:"15px",fontSize:"25px"} : {color: 'white',padding:"15px",fontSize:"25px"})}>Movies</NavLink>
      </li>
      {/* <li className="nav-item">
      <NavLink  to='/single' style={({ isActive }) => (isActive ? {color: 'red',padding:"15px",fontSize:"25px"} : {color: 'white',padding:"15px",fontSize:"25px"})}>Card</NavLink>
      </li> */}
     
    </ul>
   
  </div>
 <form className="form-inline my-2 my-lg-0 d-flex">
      <input className="form-control me-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
</nav>
        </>
    )
}

export default Navbar;