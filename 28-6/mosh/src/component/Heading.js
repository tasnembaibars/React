import React from 'react'
import {Link} from 'react-router-dom';
import {Navbar,Nav,NavItem,NavbarBrand,Container} from 'reactstrap';
function Heading(){
  return (
    <Navbar color='light' light>
<Container className='d-flex '>
    <NavbarBrand href='/'>My team</NavbarBrand>
    <Nav>
        <NavItem>
            <Link to="/add" className='btn btn-primary ' >Add user</Link>
        </NavItem>
    </Nav>
</Container>
    </Navbar>
  )
}

export default Heading;
