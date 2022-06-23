import { Link,NavLink } from "react-router-dom";
function Nav(){
const mystyle={color:"grey",padding:"15px",fontSize:"25px"};
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/"><img src="./logo192.png" height={"80px"} width={"80px"}/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <NavLink  to='/Home' style={({ isActive }) => (isActive ? {color: 'black',padding:"15px",fontSize:"25px"} : {color: 'grey',padding:"15px",fontSize:"25px"})}>Home</NavLink>
      </li>
      <li class="nav-item">
      <NavLink  to='/About' style={({ isActive }) => (isActive ? {color: 'black',padding:"15px",fontSize:"25px"} : {color: 'grey',padding:"15px",fontSize:"25px"})}>About</NavLink>
      </li>
      <li class="nav-item">
      <NavLink  to='/Contact' style={({ isActive }) => (isActive ? {color: 'black',padding:"15px",fontSize:"25px"} : {color: 'grey',padding:"15px",fontSize:"25px"})}>Contact</NavLink>
      </li>
     
    </ul>
   
  </div>
 <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
</nav>
        </>
    )
}
export default Nav;