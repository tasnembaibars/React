import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {deposite,withdrew} from './store/act';
function Ui() {
const[amount,setAmount]=useState({});
const dispatch=useDispatch();
const state=useSelector((state)=>state.count);
  return (
    <div>
       
      <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
      <button onClick={()=>dispatch(deposite(+amount))}>deposite +</button>
      <button onClick={()=>dispatch(withdrew(-amount))}>withdrew -</button>
     <h3>{state}</h3> 
    </div>
  )
}

export default Ui
