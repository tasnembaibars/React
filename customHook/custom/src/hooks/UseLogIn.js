
import React,{useState} from 'react'
import CustomHook from './CustomHook'
import Home from './Home'
function UseLogIn() {
const[emailin,setEmail]=useState('')
const[passin,setPass]=useState('')

const[email,pass,flag,onChange]=CustomHook(emailin,passin)
console.log(flag)
if(flag=='true'){
  return(
    <Home/>
  )
}else{
  

  
return (


    <div>
      <form onSubmit={onChange}>
        <div>
        <label></label>
        <input type="email"  onChange={e=>setEmail(e.target.value)} />
        <label></label>
        <input type="password"  onChange={e=>setPass(e.target.value)} />
        </div>
        <button>log in</button> 
      
      </form>

    </div>

  )
}
}

export default UseLogIn
