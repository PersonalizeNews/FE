import React from 'react'
import './css/Hero.css'
import { Link } from 'react-router-dom'
import hero from '../assets/videos/hero.mp4'

const Hero = () => {
  return (
    <>
      <video autoPlay loop muted>
        <source src={hero} type="video/mp4" />
      </video>
      <div className='hero'>
        <h1>SyncFit</h1>
        <Link to="/send" className='hero-link'>Try now</Link>
      </div>
    </>
  )
}

export default Hero