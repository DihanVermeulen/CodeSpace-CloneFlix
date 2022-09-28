import React, { useState, useEffect } from 'react';
import requests from '../../requests.js';
import './Row.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Row = ({ movies, title, value }) => {

    return (
        <div className='row'>
            <div className="content_container-wrapper">
                <h2>{title}</h2>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    centerMode={false}   
                    className=""
                    containerClass="container" // map is better
                    dotListClass=""
                    draggable
                    focusOnSelect
                    infinite={false}
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    partialVisible
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 3,
                            partialVisibilityGutter: 30
                        },
                        mobile: {
                            breakpoint: {
                                max: 600,
                                min: 0
                            },
                            items: 2,
                            partialVisibilityGutter: 5
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 600
                            },
                            items: 2,
                            partialVisibilityGutter: 5
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl
                    shouldResetAutoplay
                    sliderClass=""
                    slidesToSlide={2}
                    swipeable >
                    {movies.map((movie, key) => (
                        <article key={key} className='movie_list__card'>
                            <img className='movie_image' src={movie.image} alt='movie' />
                            <div className='movie_preview'>
                                <div className='movie_preview-heading'>{movie.name}</div>
                                <p className='movie_preview-description'>{movie.description}</p>
                            </div>
                        </article>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default Row;
