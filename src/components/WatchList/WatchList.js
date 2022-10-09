import { useEffect, useState } from 'react';
import './WatchList.css';
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

  useEffect(() => {
    let watchlistMovies = JSON.parse(localStorage.getItem('watchlistMovies'));
    setMovies(watchlistMovies);
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
