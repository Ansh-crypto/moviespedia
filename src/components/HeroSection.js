import React, { useEffect, useState } from 'react'
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
import {useNavigate} from "react-router-dom";
import MovieCard from './MovieCard';

function HeroSection() {
const[data,setData] =useState("null");
const[userInput,setUserInput]= useState('');
const [loading, setLoading] = useState(false);
const[searchClicked ,setsearchClicked] =useState(false);
const [movieData , setMovieData] = useState(null);

//Fetch data when the component mounts or user input changes
// useEffect(()=>{
// //fetchData();
// },[userInput])
const navigate = useNavigate();
const apikey = process.env.REACT_APP_API_KEY;

const fetchData = async ()=>{
    setLoading(true);
  

const options = {
  method: 'GET',
  url: 'https://advance-movie-api.p.rapidapi.com/api/v1/streamitfree/search',
  params: {
    query: `${userInput}`
  },
  headers: {
    'x-rapidapi-key': apikey,
    'x-rapidapi-host': 'advance-movie-api.p.rapidapi.com'
  }
};
try{
  const response= await axios
  .request(options);
  
    console.log(response.data);
  setData(response.data);
  navigate(`/movie/${response.data.id}`,{
    state: { data: response.data }});
  setLoading(false);
  //setMovieData(response.data.results)
}catch (error){
  console.log(error);
}finally{
  setLoading(false);
}


  
};
useEffect(()=>{
  if(userInput && searchClicked){
    fetchData();
  }
},[userInput,searchClicked])

const handleInputChange =(e)=>{
  setUserInput(e.target.value);
}

const handleButtonClick =(e) =>{
  
  e.preventDefault();
  setsearchClicked(true);
    fetchData();
};

  return (
    <div>
<div className="container-fluid" style={{marginTop:"10%", width:"50%"}}>
      <form className="d-flex">
      <input className="form-control me-2" onChange={handleInputChange} type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" onClick={handleButtonClick} type="submit">Search</button>
    </form>
    </div>
    {loading ? (
      <LoadingSpinner/>
        
      ) : (
        movieData && <MovieCard movieData={movieData} />
      )}
    </div>
  )
}

export default HeroSection;
