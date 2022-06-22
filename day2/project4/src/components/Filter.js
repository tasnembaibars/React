function check (name){
    return name.length>5;
}

function Filter(){
    var names=["Ward","Manar","Noor","Ahmad","mohammad"];
    var names2 = names.filter((name)=>check(name))
    return(
        <div>
     <h2>Filter items</h2>

       {
       names2.map(
        (value)=>
        <li>{value}</li>
       )
       }
        </div>
    )
}
export default Filter;