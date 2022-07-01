import React,{useEffect,useState} from "react";
import {NavLink} from 'react-router-dom';
function Movies(){
const [films,setFilms]=useState([]);

useEffect(()=>{
    const api=async()=>{
    const response=await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1f463ecc3c8ea96a2335f8691d9270cd`)
    const filmApi=response.json()
    console.log(filmApi)
    setFilms(filmApi)
    }
    api()
},[])
    return(
    <div>
       {films.length>0 && films.map((film) => (
        
    <div class="card" style={{width: "14rem",margin:"4%"}}>
   
  <img src={'https://image.tmdb.org/t/p/w500/'+film.backdrop_path} class="card-img-top" alt="..."/>
 
  <div class="card-body">
    <h5 class="card-title">{film.original_title}</h5>
    <p class="card-text">{film.overview}</p>
    <NavLink   to={`/single/:id`}  class="btn btn-secondary">view movie</NavLink>
    
  </div>
  
</div>
))}
    </div>
    )
}
export default Movies;