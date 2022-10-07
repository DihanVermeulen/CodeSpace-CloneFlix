import './Header.css';
import shortened_logo from '../../assets/images/shortened_logo.svg';
import longer_logo from '../../assets/images/longer_logo.svg';
import profile_photo from '../../assets/images/profile_photo.png';
import { useEffect, useState } from 'react';
import { Dropdown } from '../Dropdown/Dropdown';
import { DropdownButton } from '../Dropdown/DropdownButton/DropdownButton';
import WatchList from '../WatchList/WatchList';
import { Drawer } from '../WatchList/WatchList';
import requests from '../../requests';

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
                console.log('filtering movies...')
                return movie.rating >= 7
            })

            // GETS LENGTH OF ALL TOP RATED MOVIES
            let topRatedMoviesLength = Object.keys(topRatedMovies).length - 1;
            console.log('Length of all movies', topRatedMoviesLength);

            // SETS A RANDOM NUMBER BETWEEN 1 AND THE AMOUNT OF TOP RATED MOVIES
            let randomNum = Math.floor(Math.random() * topRatedMoviesLength);
            console.log('random number', randomNum);

            // SETS movieHeader EQUAL TO THE INDEX PROVIDED BY randomNum
            let selectedMovie = topRatedMovies[randomNum];
            console.log('Selected Movie: ', selectedMovie);
            setMovieHeader(selectedMovie);
        }

        async function fetchData() {
            await fetch(requests.fetchSchalkMovies, {
                method: 'GET',
            }).then((response) => response.json()).then(
                (responseJSON) => {
                    setMovies(responseJSON);
                    getMovieCover(responseJSON)
                }
            );
        }
        fetchData();

        // setMovieCover("https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg");
    }, []);

    if (window.innerWidth <= 600) {
        logo = shortened_logo;
    }
    else {
        logo = longer_logo
    }
    // "linear-gradient(to bottom, rgba(255,255,255,0) 50%, rgba(0,0,0,1) 100%)," + "url(" + { movieCover } + ")"
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
                        <button className='cloneflix-button_primary'>See trailer</button>
                        <button className='cloneflix-button_secondary'>+ Watch List</button>
                    </div>
                    <div>
                        {/* <button className='cloneflix-button_tertiary'>My List</button> */}
                        <WatchList>
                            <Drawer />
                        </WatchList>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header