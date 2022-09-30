import React from 'react';
import './Dropdown.css';

export const Dropdown = () => {

  const DropdownItem = (props) => {
    return (
      <a href='#' className='dropdown-item'>
        {props.children}
      </a>
    )
  }


  return (
    <div className='dropdown'>
      <DropdownItem>
        Sign In
      </DropdownItem>
      <DropdownItem>
        Log Out
      </DropdownItem>
    </div>
  )
}
