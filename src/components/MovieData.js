import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MovieData() {
  const url = "http://www.omdbapi.com/?i=tt3896198&apikey=4ef47865";
  const [moivieData, setMovieData] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setMovieData(response.data);
    });
  }, [url]);
  
  if (moivieData) {
    return (
      <div>
        <h1>{moivieData.Awards}</h1>
      </div>
    )
  }

  return (
    <div>
    
  </div>

  )
}
