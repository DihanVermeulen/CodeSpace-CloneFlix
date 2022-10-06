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
      <button id='openWatchList' className='cloneflix-button_tertiary' onClick={() => setisOpen(!isOpen)}>My List</button>
      {isOpen && props.children}
    </div>
  )
}

export const Drawer = () => {
  return (
    <aside id='watchlist'>
      <h1>My List</h1>
    </aside>
  )
}

export default WatchList
