import React, { useState, useEffect } from 'react';
import './Row.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import add_button from '../../assets/buttons/add_button.svg';
import play_button from '../../assets/buttons/play_button.svg';
import { getCurrentLoggedInUser } from '../../utils/utils';
import { WatchTrailer } from '../WatchTrailer/WatchTrailer';
const Row = (props) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // CHECKS WHAT KIND OF MOVIES TO DISPLAY AND SETS movies TO THAT VALUE
        switch (props.value) {
            case 'coming_soon':
                let comingSoonMovies = props.movies.filter(movie => {
                    return movie.is_coming_soon === 1
                })
                setMovies(comingSoonMovies);
                break;
            case 'top_rated':
                let topRatedMovies = props.movies.filter(movie => {
                    return movie.rating >= 7
                })
                setMovies(topRatedMovies);
                break;
            case 'horror_movies':
                let horrorMovies = props.movies.filter(movie => {
                    for (let genre of movie.genres) {
                        if (genre.name === 'Horror') {
                            return movie;
                        }
                    }
                });
                setMovies(horrorMovies);
                break;
            case 'action_movies':
                let actionMovies = props.movies.filter(movie => {
                    for (let genre of movie.genres) {
                        if (genre.name === 'Action') {
                            return movie;
                        }
                    }
                });
                setMovies(actionMovies);
                break;
            case 'drama_movies':
                let dramaMovies = props.movies.filter(movie => {
                    for (let genre of movie.genres) {
                        if (genre.name === 'Drama') {
                            return movie;
                        }
                    }
                });
                setMovies(dramaMovies);
                break;
            case 'romance_movies':
                let romanceMovies = props.movies.filter(movie => {
                    for (let genre of movie.genres) {
                        if (genre.name === 'Romance') {
                            return movie;
                        }
                    }
                });
                setMovies(romanceMovies);
                break;
            default:
                let availableMovies = props.movies.filter(movie => {
                    return movie.is_coming_soon !== 1
                })
                setMovies(availableMovies);
                break;
        }

    }, [props.movies, props.value])

    /**
     * ADDS A MOVIE TO THE WATCH LIST
     * @param {*} e - PASSED IN EVENT BY BUTTON CLICK
     */
    const addMovieToWatchList = (e) => {
        let allMovies = props.movies;
        console.log(allMovies)
        let movieId = e.target.parentElement.parentElement.parentElement.parentElement.id;
        console.log('movie id: ', movieId);
        let selectedMovie;
        allMovies.forEach(movie => {
            if (movie.id == movieId) {
                selectedMovie = movie;
            }
        });
        console.log('selected movie:', selectedMovie)
        let users = JSON.parse(localStorage.getItem('users'));
        let loggedInUser = getCurrentLoggedInUser();
        users.map(user => {
            if (loggedInUser.id == user.id) {
                user.watchlist.push(selectedMovie);
                localStorage.setItem('users', JSON.stringify(users));
                console.log('users: ', users);
            }
        });
    }

    // SHOWS WATCHTRAILER COMPONENT
    const watchTrailer = () => {
        document.querySelector('#watchtrailer').style.display = 'block';
    };

    return (
        <div className='row'>
            <div className="content_container-wrapper">
                <h2>{props.title}</h2>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    className=""
                    containerClass="container" // map is better
                    dotListClass=""
                    draggable
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
                            items: 5,
                            partialVisibilityGutter: 20
                        },
                        mobile: {
                            breakpoint: {
                                max: 600,
                                min: 0
                            },
                            items: 2,
                            partialVisibilityGutter: 20
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 600
                            },
                            items: 3,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    shouldResetAutoplay
                    sliderClass=""
                    slidesToSlide={2}
                    swipeable >
                    {movies.map((movie, key) => (
                        <article key={key} id={movie.id} className='movie_list__card'>
                            <img className='movie_image' src={movie.image} alt='movie' />
                            <div className='movie_preview'>
                                <h1 className='movie_preview-heading'>{movie.name}</h1>
                                <p className='movie_preview-description'>{movie.description}</p>
                                <div className='movie_preview-toolbar '>
                                    <div onClick={addMovieToWatchList}><img className='movie_preview-toolbar--button' src={add_button} alt='add'></img></div>
                                    <div >
                                        <img onClick={watchTrailer} className='movie_preview-toolbar--button' src={play_button} alt='play'></img>
                                    </div>
                                    <p>Rating: {movie.rating}</p>
                                </div>
                            </div>
                        </article>
                    ))}

                </Carousel>
            </div>
        </div>
    )
}

export default Row;
