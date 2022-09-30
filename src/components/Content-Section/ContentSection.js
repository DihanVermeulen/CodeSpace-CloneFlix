import React, { useState, useEffect } from 'react';
import './ContentSection.css';
import Row from '../../components/Row/Row';
import requests from '../../requests';

const ContentSection = () => {

  const [movies, setMovies] = useState();

  useEffect(() => {
    async function fetchData() {
      const request = await fetch(requests.fetchAllMovies);
      const { data } = await request.json();
      setMovies(data);

      return request
    }
    fetchData();
  }, []);

  if (!movies) {
    return <div className='loader'>
      <span></span>
      <span></span>
      <span></span>
    </div>
  }
  else {
    return <div className='content-section'>
      {movies && <Row title='Coming Soon' value='coming_soon' movies={movies} />}
      {movies && <Row title='Top Rated' value='top_rated' movies={movies} />}
      {movies && <Row title='All movies' value='all_movies' movies={movies} />}
    </div>
  }
  

}


export default ContentSection