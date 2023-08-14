import React from 'react';
import '../css/Header.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Header() {  
  
  return (
    <div className='header'>
        <div className='header_left'>
            <img className='logo' src={require('../images/Logo.png')}  alt='ACCZ'/>
            <AccessTimeIcon />
        </div>
        <div className='header_search'>
            <SearchIcon />
            <input placeholder='Search..' />
        </div>
        <div className='header_right'>
            <HelpOutlineIcon />
        </div>
    </div>
  )
}

export default Header;