function Map(){
    const Fruits = [
        {id: 1 , name: "Apple",  color: "Yellow"},
        {id: 2 , name: "Strawberry", color: "Red"},
        {id: 3 , name: "Kiwi", color: "Green"}
      ]; 
      
    return(
        <>
        <h4>Task 2</h4>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">fruit name</th>
      <th scope="col">fruit color</th>
     
    </tr>
  </thead>
  <tbody>
 { Fruits.map((fruit)=>(
    <tr>
      <th scope="row">{fruit.id}</th>
      <td>{fruit.name}</td>
      <td>{fruit.color}</td>
     
    </tr>
   ) )}
   
  </tbody>
</table>
        </>
    );
}
export default Map;