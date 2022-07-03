import React,{useContext} from "react";
import {UserContext} from '../UserContext';
function About(){
    const {value,setValue}=useContext(UserContext);

    return(
        <div>
          <h2>About</h2>
        <div>{value}</div>
        
        </div>) 
}
export default About;