import { useState } from 'react';
import './WatchList.css';
const WatchList = (props) => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div>
      <button className='cloneflix-button_tertiary' onClick={() => setisOpen(!isOpen)}>My List</button>
      {isOpen && props.children}
    </div>
  )
}

export const Drawer = () => {
  return (<aside id='watchlist'>WatchList</aside>)
}

export default WatchList
