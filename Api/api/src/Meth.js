import axios from 'axios';
import { useState } from 'react';

function Meth(){
    const[user,setData]=useState("")

 const getinf=()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
          console.log(res);
         setData(res.data.name+"..."+res.data.email);
       
    })
 }
    return(<>
   
<button onClick={getinf}>data</button>

{user}
    </>)
}
export  default Meth;