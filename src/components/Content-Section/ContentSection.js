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

      switch (props.value) {
        case 'coming_soon':
          let comingSoonMovies = data.filter(movie => {
            return movie.is_coming_soon === 1
          })
          setMovies(comingSoonMovies);
          break;
        case 'top_rated':
          let topRatedMovies = data.filter(movie => {
            return movie.rating >= 5
          })
          setMovies(topRatedMovies);
          break;
        default:
          let availableMovies = data.filter(movie => {
            return movie.is_coming_soon !== 1
          })
          setMovies(availableMovies);
          break;
      }

      return request
    }
    fetchData();
  }, []);

  return (
    <div className='content-section'>
      <Row title='Coming Soon' value='coming_soon' movies={movies} />
      <Row title='Top Rated' value='top_rated' movies={movies} />
      <Row title='All movies' value='all_movies' movies={movies} />
    </div>
  )
}


export default ContentSection