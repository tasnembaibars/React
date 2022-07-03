import React,{useState} from 'react'
import UseInput from './hooks/UseInput'

function UserForm() {

    const[firstName,bindFirstName,resetFirstName]=UseInput('')
    const[lastName,bindLastName,resetLastName]=UseInput('')
   
    const submitHandler=(e)=>{
     e.preventDefault()
     alert(`Hello ${firstName} ${lastName}`)  
     resetFirstName()
     resetLastName() 
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
            <label>First Name</label>
            <input  type="text" {...bindFirstName} />
            <label>Last Name</label>
            <input  type="text" {...bindLastName}/>

        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UserForm
