import React,{useState,useEffect} from 'react';
// import Single from './Single';
// import {useParams} from 'react-router-dom';
function MovieList(){
    const [movies,setMovie]=useState([]);
    // const {id}=useParams();
useEffect(()=>{
    const data= async()=>{
        const response=await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1f463ecc3c8ea96a2335f8691d9270cd");
        const movieApi=await response.json();
        console.log(movieApi);
        setMovie(movieApi);
    
    }
    data()
},[])
    return (
        <>
        {movies.map((film)=>(
        <div className="card" style={{width: "14rem"}}>
        <img src={'https://image.tmdb.org/t/p/w500/'+film.backdrop_path} class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{film.original_title}</h5>
          <p className="card-text">{film.overview}</p>
          <a href="#" className="btn btn-primary">view</a>
        </div>
      </div>
      
      ))}
      </>
  )
}

export default MovieList;