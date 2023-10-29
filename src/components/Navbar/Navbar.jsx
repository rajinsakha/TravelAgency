import React from 'react'
import './Navbar.css';
import { logo } from '../../assets';
import { navLinks } from '../../constants';

const Navbar = () => {
  return (
    <div className='app__navbar'>
      <a href="#">
        <img src={logo} alt="logo" width={114.912} height={33.994} />
      </a>

      <ul className='app__navbar_links'>
        {navLinks.map((link)=>(
            <li key={link.label}>
                <a href={link.href}>{link.label}</a>
            </li>
        ))}
      </ul>

       <div className="app__navbar_account">
        <a href='#'>Login</a>
        <a href="#">Signup</a>
        </div>     

    </div>
  )
}

export default Navbar
