import React, { useState, useEffect } from 'react';
import requests from '../../requests.js';
import instance from '../../axios.js';
import arrow from '../../assets/images/arrow.svg'

const Row = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(requests.fetchAllMovies);
            setMovies(request.data.data)
            return request
        }
        fetchData();
    }, [movies]);

    console.log(movies)

    return (
        <div className='row'>
            <div className="content_container-wrapper">
                <h2>{props.title}</h2>
                <button className="previous-button"><img src={arrow} alt='previous'></img></button>
                <button className="next-button"><img src={arrow} alt='next'></img></button>
                <section className="content_container" id="coming_soon">
                    
                </section>

                {/* container for posters */}
            </div>
        </div>
    )
}

export default Row;
