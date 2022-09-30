import React, { useState } from 'react';
import dropdown_activated from './dropdown_activated.svg';
import dropdown_deactivated from './dropdown_deactivated.svg';

export const DropdownButton = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            {open && <img src={dropdown_activated} className='dropdown-button' alt='drop' onClick={() => setOpen(!open)}></img>}
            {!open && <img src={dropdown_deactivated} className='dropdown-button' alt='drop' onClick={() => setOpen(!open)}></img>}
            {open && props.children}
        </div>
    )

}
