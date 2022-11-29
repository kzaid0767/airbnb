import React from 'react'
import logo from './images/airbnb-logo.png'
import photogrid from './images/photo-grid.png'
import './TopHalf.css'

function TopHalf() {
  return (
    <div>
        <nav className='app-nav'>
            <img className='nav-logo' src={logo} alt={'logo of airbnb'} />
        </nav>
        <div className='hero'>
            <img className='nav-hero-image' src={photogrid} alt={'airbnb grid'} />
            <h1 className='hero-h1'>Online Experiences</h1>
            <p className='hero-text'>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    </div>
  )
}

export default TopHalf