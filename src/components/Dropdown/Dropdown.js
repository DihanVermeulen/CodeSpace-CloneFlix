import React, { useEffect, useState } from 'react';
import './Dropdown.css';
import {isSignedIn} from '../../utils/utils'
import WatchList from '../WatchList/WatchList';

export const Dropdown = () => {
  const [signedIn, setsignedIn] = useState(false);

  useEffect(() => {
    // CHECKS ON THE LOCALSTORAGE TO SEE IF USER IS SIGNED IN AND SETS {signedIn} TO THAT VALUE 
    setsignedIn(isSignedIn());
  }, [])

  // SETS LOCALSTORAGE ITEM TO TRUE WHEN USER SIGNS IN
  const signIn = () => {
    console.log('Log In');
  }

  // SETS LOCALSTORAGE ITEM TO FALSE WHEN USER SIGNS OUT
  const signOut = () => {
    console.log('Log Out');
    localStorage.setItem('SignedIn', false);
    setsignedIn(false);
  }

  const DropdownItem = (props) => {
    return (
      <a href={props.link} className='dropdown-item' onClick={props.function}>
        {props.children}
      </a>
    )
  }

  // BASED ON IF THE USER IS SIGNED IN WHAT BUTTON WILL DISPLAY
  return (
    <div className='dropdown'>
      {!signedIn && <DropdownItem link='/login' function={signIn}>Log In</DropdownItem>}
      {signedIn && <DropdownItem link='/login' function={signOut}>Log Out</DropdownItem>}
      <WatchList class='dropdown-item' />
    </div >
  )
}
