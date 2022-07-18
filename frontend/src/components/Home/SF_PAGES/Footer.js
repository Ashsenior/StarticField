import React from 'react'
import logo from './Asset 1.svg'
import {Link } from 'react-router-dom'

export const Footer = () => {
  const mystyle = {
    position: 'absolute',
    top: '400%',
    width: '100%',
    height: '60%',
    backgroundColor: '#000000',
    color: 'white',
    zIndex: 2,
    };
  const content = {
    position: 'absolute',
    textAlign: 'left',
    left: '1%',
    width:'25%',
    height:'auto',
  };
  const footerlogo = {
    postion: 'absolute',
    top: '10%',
    width: '15%',
    height: '25%',
    left: '5%',
  };
  const copyright = {
    position: 'absolute',
    top:'85%',
    left:'1%',
    width: 'auto',
    height: 'auto',
  };
  const company = {
    position: 'absolute',
    textDecoration: 'none',
    color: 'white',
    top:'10%',
    left:'35%',
    fontSize: '28px',
    width: 'auto',
    height: 'auto',
  };
  const otherlinks = {
    position: 'absolute',
    textDecoration: 'none',
    color: 'white',
    top:'10%',
    left:'55%',
    fontSize: '28px',
    width: 'auto',
    height: 'auto',
  };
  const contact = {
    position: 'absolute',
    textDecoration: 'none',
    color: 'white',
    top:'10%',
    left:'75%',
    fontSize: '28px',
    width: 'auto',
    height: 'auto',
  };
  const cone = {
    position: 'absolute',
    textDecoration: 'none',
    color: 'white',
    height: 'auto',
    width: 'auto',
    top: '30%',
    left: '35%',
  };
  const ctwo = {
    position: 'absolute',
    textDecoration: 'none',
    color: 'white',
    height: 'auto',
    width: 'auto',
    top: '42.5%',
    left: '35%',
  };
  const cthree = {
    position: 'absolute',
    textDecoration: 'none',
    color: 'white',
    height: 'auto',
    width: 'auto',
    top: '55%',
    left: '35%',
  };
  const done = {
    position: 'absolute',
    height: 'auto',
    textDecoration: 'none',
    color: 'white',
    width: 'auto',
    top: '30%',
    left: '55%',
  };
  const dtwo = {
    position: 'absolute',
    textDecoration: 'none',
    color: 'white',
    height: 'auto',
    width: 'auto',
    top: '42.5%',
    left: '55%',
  };
  const dthree = {
    textDecoration: 'none',
    position: 'absolute',
    color: 'white',
    height: 'auto',
    width: 'auto',
    top: '55%',
    left: '55%',
  };
  const eone = {
    
    textDecoration: 'none',
    position: 'absolute',
    color: 'white',
    height: 'auto',
    width: 'auto',
    top: '67.5%',
    left: '55%',
  }
  const email = {
    textDecoration: 'none',
    position: 'absolute',
    height: 'auto',
    width: 'auto',
    top: '42.5%',
    left: '75%',
  };
  return (
    <div style={mystyle}>
      <img src={logo} className="footerlogo" alt='logo' style={footerlogo}/>
      <div className='copyRigth' style={copyright}>
        <span />&copy; 2022, Startic Field Pvt. Ltd. All Rights Reserved.
      </div>
      <div className='content' style={content}>
        Startic Field is a company which aims to endow student entrepreneurs with the power of community, knowledge, capital and mentorship. It is also a forum where we bring together working professionals as contributors who have a passion to startup, years of experience and small amounts of capital but do not have the bandwidth to work on the ground.
      </div>
      <Link to='/' className='company' style={company}>
        <b>Company</b>
      </Link>
      <Link to="/about" className='cone' style={cone}>About Us</Link>
      <Link to='/' className='ctwo' style={ctwo}>Privacy Policy</Link>
      <Link to='/' className='cthree' style={cthree}>Terms and Conditions</Link>
      <Link to='/' className='otherlinks' style={otherlinks}>
        <b>Other Links</b>
      </Link>
      <Link to='/' className='done' style={done}>Community</Link>
      <Link to='/' className='dtwo' style={dtwo}>Events</Link>
      <Link to='/' className='dthree' style={dthree}>Programs</Link>
      <Link to='/' className='contactUs' style={contact}>
        <b>Contact Us</b>
      </Link>
      <Link to='/' className='eone' style={eone}>Careers</Link>
      <div className='email' style={email}>contactUs@starticField.com</div>
      </div>
  );
}
