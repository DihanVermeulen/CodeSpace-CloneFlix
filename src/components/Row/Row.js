import React, { useState, useEffect } from 'react';
import requests from '../../requests.js';
import arrow from '../../assets/images/arrow.svg';
import './Row.css';

const Row = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await fetch(requests.fetchAllMovies);
            const { data } = await request.json();

            switch (props.value) {
                case 'coming_soon': let comingSoonMovies = data.filter(movie => {
                    return movie.is_coming_soon === 1
                })
                    setMovies(comingSoonMovies);
                    break;
                case 'top_rated': let topRatedMovies = data.filter(movie => {
                    return movie.rating >= 5
                })
                    setMovies(topRatedMovies);
                    break;
                default: let availableMovies = data.filter(movie => {
                    return movie.is_coming_soon !== 1
                })
                    setMovies(availableMovies);
                    break;
            }

            // if (props.value === "coming_soon") {
            //     let comingSoonMovies = data.filter(movie => {
            //         return movie.is_coming_soon === 1
            //     })
            //     setMovies(comingSoonMovies);
            // }
            // else if (props.value === "top_rated") {
            //     let topRatedMovies = data.filter(movie => {
            //         return movie.rating >= 5
            //     })
            //     setMovies(topRatedMovies);
            // }
            // else {
            //     let availableMovies = data.filter(movie => {
            //         return movie.is_coming_soon !== 1
            //     })
            //     setMovies(availableMovies);
            // }

            return request
        }
        fetchData();
    }, [movies, props.value]);

    return (
        <div className='row'>
            <div className="content_container-wrapper">
                <h2>{props.title}</h2>
                <section className="content_container">
                    <button className="previous-button"><img src={arrow} alt='previous'></img></button>
                    <button className="next-button"><img src={arrow} alt='next'></img></button>
                    {movies.map((movie, key) => (
                        <article key={key} className='movie_list__card'>
                            <img className='movie_image' src={movie.image} alt='movie' />
                            <div className='movie_preview'>
                                <div className='movie_preview-heading'>{movie.name}</div>
                                <p className='movie_preview-description'>{movie.description}</p>
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default Row;
