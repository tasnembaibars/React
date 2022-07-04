import React,{useState} from 'react'

function CustomHook(emailin,passin) {
const[email,setEmail]=useState('tasnem@gmail.com')
const[pass,setPass]=useState('1234')
const[flag,setFlag]=useState(false)
 const onChange=()=>{
    if(emailin===email && passin===pass){
      setFlag('true')
       return window.alert("loggedin successfuly");
      
    }else{
       return window.alert("log in faild")
    }
 }
 return([email,pass,flag,onChange])
}

export default CustomHook
