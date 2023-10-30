import React, { useState } from "react";
import "./Navbar.css";
import { logo } from "../../assets";
import { navLinks } from "../../constants";
import {MdMenu} from 'react-icons/md';
import {IoMdClose} from 'react-icons/io'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <a href="#">
        <img src={logo} alt="logo" width={114.912} height={33.994} />
      </a>

      <ul className="app__navbar_links">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar_account">
        <a href="#">Login</a>
        <a href="#">Signup</a>
      </div>

      <div className="app__navbar_smallscreen">
          <MdMenu fontSize={24} onClick={()=>setToggleMenu(true)} />

        
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay">
            <ul className="app__navbar_smallscreen_links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
            <IoMdClose fontSize={28} onClick={()=>setToggleMenu(false)} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
