import React, { useEffect, useState } from 'react';
import dropdown_activated from './dropdown_activated.svg';
import dropdown_deactivated from './dropdown_deactivated.svg';

export const DropdownButton = (props) => {
    const [open, setisOpen] = useState(false);

    useEffect(() => {
        document.addEventListener('mousedown', (e) => {
          if (!e.target.closest('.dropdown')) {
            setisOpen(false);
          }
        })
      })

    return (
        <div>
            {open && <img src={dropdown_activated} className='dropdown-button' alt='drop' onClick={() => setisOpen(!open)}></img>}
            {!open && <img src={dropdown_deactivated} className='dropdown-button' alt='drop' onClick={() => setisOpen(!open)}></img>}
            {open && props.children}
        </div>
    )

}
