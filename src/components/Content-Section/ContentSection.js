import React from 'react';
import './ContentSection.css';
import arrow from '../../assets/images/arrow.svg';
import Row from '../../components/Row/Row.js';

let movies = [];
let comingSoonMovies = [];

const init = async () => {
  const response = await fetch('https://project-apis.codespace.co.za/api/movies');

  const { data } = await response.json();

  movies = data;

  movies.forEach(movie => {
    if (movie.is_coming_soon) {
      comingSoonMovies.push(movie);
    }
  })

};

init();

const ContentSection = () => {

  const logAllMovies = () => {
    console.table(movies);
  }

  const logForEachMovies = () => {
    movies.map(movie =>{
      console.log(movie);
      return (<div>1</div>)
    }
    );
  };

  return (
    <div className='content-section'>
      <div className="content_container-wrapper">
        <button onClick={logAllMovies}>Log all movies</button>
        <button onClick={logForEachMovies}>Log For Each</button>
        <button className="previous-button"><img src={arrow} alt='previous'></img></button>
        <button className="next-button"><img src={arrow} alt='next'></img></button>
          <Row title='Trending Now'/>
          <Row title='Comedies'/>
          <Row title='Top Rated'/>
      </div>
    </div>
  )
}

export default ContentSection