import './Header.css';
import shortened_logo from '../../assets/images/shortened_logo.svg';
import longer_logo from '../../assets/images/longer_logo.svg';
import profile_photo from '../../assets/images/profile_photo.png';
import { useEffect, useState } from 'react';
import { Dropdown } from '../Dropdown/Dropdown';
import { DropdownButton } from '../Dropdown/DropdownButton/DropdownButton';
import WatchList from '../WatchList/WatchList';
import requests from '../../services/requests';
import { getCurrentLoggedInUser } from '../../utils/utils';

const Header = () => {
    const [movies, setMovies] = useState([]);
    const [movieHeader, setMovieHeader] = useState([]);
    let logo = shortened_logo;

    const handleResize = () => {
        if (window.innerWidth <= 600) {
            document.querySelector('.main-header--top_logo').setAttribute('src', shortened_logo);
        } else {
            document.querySelector('.main-header--top_logo').setAttribute('src', longer_logo);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        const getMovieCover = (data) => {
            let movies = data.data;
            // FILERS MOVIES TO GET TOP RATED MOVIES
            let topRatedMovies = movies.filter(movie => {
                return movie.rating >= 7
            })

            // GETS LENGTH OF ALL TOP RATED MOVIES
            let topRatedMoviesLength = Object.keys(topRatedMovies).length - 1;

            // SETS A RANDOM NUMBER BETWEEN 1 AND THE AMOUNT OF TOP RATED MOVIES
            let randomNum = Math.floor(Math.random() * topRatedMoviesLength);

            // SETS movieHeader EQUAL TO THE INDEX PROVIDED BY randomNum
            let selectedMovie = topRatedMovies[randomNum];
            setMovieHeader(selectedMovie);
        }

        async function fetchData() {
            await fetch(requests.fetchAllMovies, {
                method: 'GET',
            }).then((response) => response.json()).then(
                (responseJSON) => {
                    setMovies(responseJSON);
                    getMovieCover(responseJSON)
                }
            );
        }
        fetchData();
    }, []);

    // OPENS Watchtrailer COMPONENT
    const watchTrailer = () => {
        document.querySelector('#watchtrailer').style.display = 'block';
    };

    // ADDS A MOVIE TO THE WATCHLIST
    const addMovieToWatchList = (e) => {
        let allMovies = movies.data;
        console.log(allMovies)
        let movieId = e.target.parentElement.id;
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
        let watchlistMovies = [];
        users.map(user => {
            if (loggedInUser.id == user.id) {
                watchlistMovies = user.watchlist;
                user.watchlist.push(selectedMovie);
                localStorage.setItem('users', JSON.stringify(users));
                console.log('users: ', users);
            }
        });
    }

    // CHANGES LOGO ON WINDOW SIZE
    if (window.innerWidth <= 600) {
        logo = shortened_logo;
    }
    else {
        logo = longer_logo
    }

    return (
        <header className='main-header' style={{ backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 50%, rgba(0,0,0,1) 100%), url(${movieHeader.image})` }}>
            <section className='main-header--top'>
                <img className='main-header--top_logo' src={logo} alt='logo'></img>
                <div className='flex flex-column'>
                    <div className='flex align-center'>
                        <img className='main-header--top_profile' src={profile_photo} alt='profile'></img>
                        <DropdownButton>
                            <Dropdown></Dropdown>
                        </DropdownButton>
                    </div>
                </div>
            </section>
            <section className='main-header--bottom'>
                <div className='main-header--bottom_content'>
                    <h2 className='main-header--cover_title'>{movieHeader.name}</h2>
                    <div id={movieHeader.id}>
                        <button onClick={watchTrailer} className='cloneflix-button_primary'>See trailer</button>
                        <button onClick={addMovieToWatchList} className='cloneflix-button_secondary'>+ Watch List</button>
                    </div>
                    <div>
                        <WatchList class='cloneflix-button_tertiary' />
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header