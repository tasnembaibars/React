
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';
import { Link,useHistory } from 'react-router-dom';
import {GlobalContext} from '../context/GlobalState';
import React,{useContext,useState,useEffect} from 'react';


function EditUser(props){
  const {users,editUser}=useContext(GlobalContext);
    const history=useHistory();
    const [selectedUser,setselectedUser]=useState({
      id:'',
      name:'',
    });
    const currentUserID=props.match.params.id;
    useEffect(()=>{
      const userId=currentUserID;
      const selectedUser=users.find(user=>user.id===userId);
      setselectedUser(selectedUser)
    },[currentUserID,users])

 const onSubmit=(e)=>{
  e.preventDefault();
    editUser(selectedUser)
history.push('/');
 }
 const onChange=(e)=>{
  setselectedUser({...selectedUser,[e.target.name]:e.target.value})
 }
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type='text' name='name' value={selectedUser.name} onChange={onChange} placeholder='enter name'></Input>
      </FormGroup>
      <Button type='submit'>Edit Name</Button>
      <Link to="/" className='btn btn-danger ml-2'>Cancel</Link>
    </Form>
  )
}

export default EditUser;
