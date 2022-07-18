import React from 'react'
import logo from './Asset 1.svg'
import './Header.css'
import {NavLink} from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <div className='hdrsideImg'>
          <img src={logo} alt="pic"/>
        </div>
        <ul>
          <li><NavLink to="/testing" className="a">Testing</NavLink></li>
          <li><NavLink to="/news" className="a">News</NavLink></li>
          <li><NavLink to="/profile" className="a">Profile</NavLink></li>
          <li><NavLink to="/about" className="a">About</NavLink></li>
          <li><NavLink to="/events" className="a">Events</NavLink></li>
          <li><NavLink to="/contact" className="a">Contact</NavLink></li>
          <li><NavLink to="/" className="a">Home</NavLink></li>
          
        </ul>
    </div>
  );
}
