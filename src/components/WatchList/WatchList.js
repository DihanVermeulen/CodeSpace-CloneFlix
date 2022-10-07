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
      {isOpen && <Drawer><div onClick={() => setisOpen(!isOpen)} className='watchlist-close_button'>X</div></Drawer>}
    </div>
  )
}

export const Drawer = (props) => {
  return (
    <aside id='watchlist'>
      <h1 className='watchlist-header'>My List</h1>
      {props.children}
    </aside>
  )
}

export default WatchList
