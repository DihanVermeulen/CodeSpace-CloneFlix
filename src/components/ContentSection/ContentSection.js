import React, { useState, useEffect } from 'react';
import './ContentSection.css';
import Row from '../Row/Row';
import requests from '../../services/requests';
import { WatchTrailer } from '../WatchTrailer/WatchTrailer';

const ContentSection = () => {

  const [movies, setMovies] = useState();

  useEffect(() => {
    async function fetchData() {
      const request = await fetch(requests.fetchAllMovies);
      const { data } = await request.json();
      setMovies(data);

      return data
    }
    fetchData();
  }, []);

  if (!movies) {
    return <section className='loader'>
      <span></span>
      <span></span>
      <span></span>
    </section>
  }
  else {
    return <section className='content-section'>
      <WatchTrailer />
      {movies && <Row title='Coming Soon' value='coming_soon' movies={movies} />}
      {movies && <Row title='Top Rated' value='top_rated' movies={movies} />}
      {movies && <Row title='Available Movies' value='avail_movies' movies={movies} />}
    </section>
  }
  

}


export default ContentSection