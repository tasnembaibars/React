import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import { decrement, increment } from './Action';
function Counter() {
    const count=useSelector(state=>state)
    const dispatch=useDispatch() 
    return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(increment())}>Increment</button>
    </div>
  )
}

export default Counter
