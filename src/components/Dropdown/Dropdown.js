import React from 'react';
import './Dropdown.css';
import isSignedIn from '../../utils/signIn'

export const Dropdown = () => {
  console.log(isSignedIn());

  const signIn = () => {
    console.log('Log In');
    window.localStorage.setItem('SignedIn', true);
  }
  
  const signOut = () => {
    console.log('Log Out');
    window.localStorage.setItem('SignedIn', false);
  }

  const DropdownItem = (props) => {
    return (
      <a href='#' className='dropdown-item' onClick={props.function}>
        {props.children}
      </a>
    )
  }


  return (
    <div className='dropdown'>
      <DropdownItem function={signIn}>
        Log In
      </DropdownItem>
      <DropdownItem function={signOut}>
        Log Out
      </DropdownItem>
    </div>
  )
}
