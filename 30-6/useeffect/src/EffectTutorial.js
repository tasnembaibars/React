import React,{useEffect, useState} from "react";
// import axios from "axios";
// function EffectTutorial(){
//     const[data,setData]=useState("");
//     const[count,setCount]=useState(0);
// useEffect(()=>{
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then((response)=>{
//      console.log(response.data);
//      setData(response.data[0].title);
//      console.log("api was called");
//     })
// },[]);
// return(<>
// <h1>{data}</h1>
// {/* {data.map((info)=>{
//     <h2>{info.title}</h2>
// })} */}
// <h1>{count}</h1>
// <button onClick={()=>{setCount(count+1)}}>inc</button>
// </>);

// }
// export default EffectTutorial;
function EffectTutorial(){
    const[data,setData]=useState([]);
    useEffect(()=>{
        const info= async()=>{
            const response=await fetch("https://jsonplaceholder.typicode.com/posts");
            const dataApi= await response.json();
            setData(dataApi);
        }
        info()
    });
return(<>
{/* {data.map((user)=>(
    <div key={user.userId}  >{JSON.stringify(user)}</div>
    ))} */}
  <table class="table">
  <thead>
    <tr>
      {/* <th scope="col"> userid</th> */}
      <th scope="col">id</th>
      <th scope="col">title</th>
      <th scope="col">body</th>
    </tr>
  </thead>
  <tbody>
 { data.map((user)=>(
    <tr>
      {/* <th scope="row">{user.userId}</th> */}
      <td>{user.id}</td>
      <td>{user.title}</td>
      <td>{user.body}</td>
    </tr>
   ) )}
   
  </tbody>
</table>
</>)
}
export default EffectTutorial;