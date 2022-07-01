import React,{useContext} from 'react'
import {Link} from 'react-router-dom';
import {ListGroup,ListGroupItem,Button} from 'reactstrap';
import {GlobalContext} from '../context/GlobalState';
function UserList(){
    const {users,removeUser}=useContext(GlobalContext);
    // console.log(users);
  return (
    <div>
     <ListGroup className='mt-4'>
{users.length>0 ?(
  <>
     {users.map(user=> (
            <ListGroupItem className='d-flex' key={user.id}>
            <strong> {user.name}</strong>
        <div className='ml-auto'> 
        <Link className='btn btn-warning mr-1' to={`/edit/${user.id}`}>Edit</Link>
        <Button onClick={()=>removeUser(user.id)} color='danger'>Delete</Button>
        </div>
        </ListGroupItem>
      
        ))}

  </>
):(<h4 className='text-center'>No users</h4>)}

     
        
     </ListGroup>
    </div>
  )
}

export default UserList;
