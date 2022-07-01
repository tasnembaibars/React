import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router';
import {NavLink}from 'react-router-dom';
function Single(){
  const [films,setFilms]=useState([]);
 const {id}=useParams;
useEffect(()=>{
    const api=async()=>{
    const response=await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1f463ecc3c8ea96a2335f8691d9270cd/${id}`)
    const filmApi=response.json()
    console.log(filmApi)
    setFilms(filmApi.results)
    }
    api()
},[])
return(
  <>
     {/* {films.length>0 && films.map((film) => ( */}
      
  <div class="card" style={{width: "14rem",margin:"4%"}}>
 
<img src={'https://image.tmdb.org/t/p/w500/'+films.backdrop_path} class="card-img-top" alt="..."/>

<div class="card-body">
  <h5 class="card-title">{films.original_title}</h5>
  <p class="card-text">{films.overview}</p>
  <NavLink   to={`/single/${films.id}`}  class="btn btn-secondary">view movie</NavLink>
  
</div>

</div>
{/* ))} */}
  </>
  )
}

export default Single;