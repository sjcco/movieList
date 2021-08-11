import React, { useState, useEffect } from 'react';
import Card from '../components/card';


const List = () => {
  const [movieData, setMovieData] = useState({
    data: [],
    loading: true,
  });

  useEffect(async () => {
    const movies = await fetch('../../src/assets/data.json');
    const moviesJSON = await movies.json();
    if (moviesJSON) {
      setMovieData({
        data: moviesJSON,
        loading: false,
      });
    }
  })

  const { data, loading } = movieData;

  if (loading) {
    return ( <div>loading...</div> );
  }

  return ( data.map(movie => <Card key={ movie.id } movie={ movie } />) );
}
 
export default List;