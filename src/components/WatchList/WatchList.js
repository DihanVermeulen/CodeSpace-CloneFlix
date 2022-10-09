import { useEffect, useState } from 'react';
import './WatchList.css';
import { getCurrentLoggedInUser } from '../../utils/utils';
import play_button from '../../assets/buttons/play_button.svg';
const WatchList = (props) => {
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
      if (!e.target.closest('#watchlist') && !e.target.closest('#openWatchList')) {
        setisOpen(false);
      }
    })
  })

  return (
    <div>
      <button id='openWatchList' className={props.class} onClick={() => setisOpen(!isOpen)}>My List</button>
      {isOpen && <Drawer><div onClick={() => setisOpen(!isOpen)} className='watchlist-close_button'>X</div></Drawer>}
    </div>
  )
}

export const Drawer = (props) => {
  const [movies, setMovies] = useState([]);
  let users = JSON.parse(localStorage.getItem('users'));
  let loggedInUser = getCurrentLoggedInUser();
  console.log('logged in user', loggedInUser);

  // SETS THE WATCH LIST MOVIES EQUAL TO THE CURRENT LOGGED IN USER'S WATCH LIST
  useEffect(() => {
    let watchlistMovies = [];
    users.map(user => {
      if (loggedInUser.id == user.id) {
        watchlistMovies = user.watchlist;
      }
    });
    setMovies(watchlistMovies);
    console.log('watch list movies:', watchlistMovies);
  }, []);

  const watchTrailer = () => {
    document.querySelector('#watchtrailer').style.display = 'block';
  };

  return (
    <aside id='watchlist'>
      <h1 className='watchlist-header'>My List</h1>
      {props.children}
      <section className='watchlist-content_section'>

        {movies.map((movie, key) => {
          return (

            <div className='watchlist-movie_card ' key={key}>
              <img className='watchlist-movie_card-image' src={movie.image}></img>
              <div className='watchlist-movie_preview'>
                <h1 className='watchlist-movie_preview-title'>{movie.name}</h1>
                <p className='watchlist-movie_preview-description'>{movie.description}</p>
                <div className='watchlist-movie_preview-toolbar'>
                  <div >
                    <img onClick={watchTrailer} className='movie_preview-toolbar--button' src={play_button} alt='play'></img>
                  </div>
                  <p>Rating: {movie.rating}</p>
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </aside>
  )
}

export default WatchList
