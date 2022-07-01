import React,{useState} from "react";
function Statehooks(){
    // let counter =0;
    const [counter,setCounter]=useState(0);
    const increment=()=>{
    // counter+=1;
    setCounter(counter+1);
    console.log(counter);
    }
    return(
        <>
        {counter}{" "}
        <button onClick={increment}> Increment </button>
        </>
    );
}
export default Statehooks;