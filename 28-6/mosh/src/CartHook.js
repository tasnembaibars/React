import React,{useState} from "react";
function CartHook() {
    
 const[items,setItems]=useState(0);
 const add=()=>{
   setItems(items+1);
   console.log(items);
 }
 return(
 <>
 <div className="card" style={{width: "18rem",margin:"22px"}}>
  <img className="card-img-top" src={'1.jpeg'} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">product 1</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
    <button onClick={add}>Add to cart</button>
  </div>
  <i className="fa fa-solid fa-cart-arrow-down"></i>{items}
</div>

 </>
 )   
}
export default CartHook;