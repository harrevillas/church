import React from 'react'
import './Header.css';
import Logo from './Logo';
import Nav from './Nav';

function Header() {
  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
        {/* {logo} */}
        <Logo/>
            {/* {search bar} */}
                {/* {nav} */}
                <Nav />

    </header>
  )

}

export default Header;