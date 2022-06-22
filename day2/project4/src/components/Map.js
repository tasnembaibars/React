function Map(){
    var names=["Ward","Manar","Noor","Ahmad","mohammad"];
   
    return(
        <div>
         <h2>Map items</h2>
       {
       names.map(
        (value)=>
        <li>{value}</li>
       )
       }
        </div>
    )
}
export default Map;