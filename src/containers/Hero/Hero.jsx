import React from 'react'
import { heroImage } from '../../assets'
import "./Hero.css"

const Hero = () => {
  return (
    <div className='section__padding app__wrapper'>
      <div className="app__wrapper_info">
        <p className='tagline'>BEST DESTINATIONS AROUND THE WORLD</p>
        <h1 className='heading'>Travel, enjoy and live a new and full life</h1>
        <p className='description fix-width'>Life is all about travelling and exploring new places. Jadoo brings you packages at effective prices for making your holidays amazing, ensuring you memories for life. Live your life to the fullest.</p>
        <div className='info-buttons'>
        <button className='custom-button'>Find out More</button>
        
        </div>
        
      </div>

      <div className="app__wrapper_img">
        <img src={heroImage} alt="hero" />
      </div>
    </div>
  )
}

export default Hero
