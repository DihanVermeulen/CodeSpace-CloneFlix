import { useEffect, useState } from 'react';
import './WatchList.css';
import {getCurrentLoggedInUser} from '../../utils/utils';
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
      if(loggedInUser.id == user.id) {
        watchlistMovies = user.watchlist;
      }
    })
    setMovies(watchlistMovies);
    console.log('watch list movies:', watchlistMovies);
  }, [])

  return (
    <aside id='watchlist'>
      <h1 className='watchlist-header'>My List</h1>
      {props.children}
      {movies.map((movie, key) => {
        return <div key={key}>{movie.id}</div>
      })}
    </aside>
  )
}

export default WatchList
