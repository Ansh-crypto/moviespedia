import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function MovieCard({ movieData }) {
  //   const [movie , setMovie] =useState(null);
  //   const {id} = useParams();

  //   useEffect(() =>{

  //     const fetchMovie= async ()=>{
  //       const options ={
  //         method:"GET",
  //         url:`https://api.themoviedb.org/3/movie/${id}`,

  //         headers:{
  //           accept:'application/json',
  //           Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODJiYmQzYmY2MDhjYWY5MGZlZWU1YWY3OWM4MTgyNyIsInN1YiI6IjY2MWQxYjFjMGU1YWJhMDE2M2Y0YzRkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CaN-o3sgDS5JAYJ8rbdBGluvUwagClttXS9LHgVfPvM'
  //         }
  //       };
  // try{

  //   const response =await axios.request(options);

  //   console.log(response.data);
  //   setMovie(response.data);
  // }catch(error){
  //   console.error(error);
  // }
  // };

  // fetchMovie();

  // },[id]);
  const location = useLocation();
  const movie = location.state.data;

  return (
    <div>
      { movie && movie.result && movie.result.data ? (
        <div className="card mb-3">



          <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.result.data[0].Thumbnail}`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{movie.result.data[0].Title}</h5>

            <p className="card-text">{movie.result.data[0].Description}</p>
            <p className="card-text"><small className="text-muted">Release date: {movie.result.data[0].Release}</small></p>





          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default MovieCard
