import * as React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
    return (
      <div className='navbar-container'>
        <nav className='navbar nes-container is-dark is-rounded'>
          <NavLink to ="/" className={({ isActive }) => isActive ? 'nes-btn is-primary' : 'nes-btn'}>
            Home
          </NavLink>
          <NavLink to ="/about" className={({ isActive }) => isActive ? 'nes-btn is-primary' : 'nes-btn'}>
            About
          </NavLink>
          <NavLink to ="/projects" className={({ isActive }) => isActive ? 'nes-btn is-primary' : 'nes-btn'}>
            Projects
          </NavLink>
        </nav>
      </div>
    );

  };
  