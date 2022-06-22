// function Sort(){
//     var names=["Ward","Manar","Noor","Ahmad","Mohammad"];
//     var names2=names.sort();
//     return(
//         <div>
//             <h2>Sort items</h2>
//        {
//        names2.map(
//         (value)=>
//         <li>{value}</li>
//        )
//        }
//         </div>
//     )
// }
// export default Sort;


function Sort(){
  const arr=[1,2,33,41,5];
  arr.sort((a,b)=>a-b);
  var num=[];
  arr.forEach((item) => {
    num.push(<li>{item}</li>) 
 })
  return(
  
     <div className='container'>
      {num}
    </div>
       
    
  )
}
export default Sort;