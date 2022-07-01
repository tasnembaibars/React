import React,{useState} from "react";

// function StateTutorial(){
//     const[counter,setCounter]=useState(0);

//     const increment=()=>{
//         setCounter(counter+1);
//     }
// return (<>
// {counter}<button onClick={increment}>Increment</button>
// </>);
// }
// export default StateTutorial;
function StateTutorial(){
    const[inputValue,setInputValue]=useState("pedro");
let onChange=(event)=>{
const newValue=event.target.value;
setInputValue(newValue);
};
   
return (<>
<input onChange={onChange} />
{inputValue}
</>);
}
export default StateTutorial;