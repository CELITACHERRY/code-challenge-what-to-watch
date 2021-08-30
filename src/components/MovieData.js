import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MovieData() {
  const url = "http://www.omdbapi.com/?i=tt3896198&apikey=4ef47865";
  console.log(url);
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setMovieData(response.data);
    });
  }, [url]);
  
  if (movieData) {

 
    return (
      <div>
        <h1>{movieData.plot}</h1>
        <h1>{movieData.title}</h1>
        <h1>{movieData.released}</h1>
        <h1>{movieData.ratings}</h1>
        <h1>{movieData.poster}</h1>
      </div>
    )
  }

  return (
    <div>
    
  </div>

  )
}
