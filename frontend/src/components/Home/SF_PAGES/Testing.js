import React from 'react'
import './Testing.css'
import { useEffect } from 'react';
import Header from './Header';

export const Testing = () => {
  function handle() {
    console.log('hanadle has been triggered');
  }
  useEffect(() => {
  const handleScroll =event =>{
    console.log('window.innerHeight',window.innerHeight);
    console.log('window.scrollY',window.scrollY);
    let a = window.innerHeight;
    let b = window.scrollY;
    console.log('percentage scrolled',((b-a)*100/a))
  }
  window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
  return (
    <div className='rectangle'>
    <Header />
    <h1>THIS IS FOR DEVELOPERS ONLY.</h1>
    <div className='ellipseone' />
    <div className='ellipsetwo' />
    <div className='ellipsethree' />
    <div className='ellipsefour' />
    <div className='lineone'/>
    </div>
  );
}
