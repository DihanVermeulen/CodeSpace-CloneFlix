import React from 'react';
import './ContentSection.css';
import Row from '../../components/Row/Row.js';

const ContentSection = () => {

  return (
    <div className='content-section'>
      <Row title='Coming Soon' value='coming_soon' />
      <Row title='Top Rated' value='top_rated' />
      <Row title='All movies' value='all_movies' />
    </div>
  )
}


export default ContentSection