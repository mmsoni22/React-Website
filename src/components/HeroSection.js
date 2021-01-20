import React from 'react'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container' id='home'>
            <video src='/videos/waterfall.mp4' autoPlay loop muted  />  
            <h1>AMAZING WATERFALLS</h1>
            <p>Explore the most attractive waterfalls in the world!</p>  
            <button className='primary'>EXPLORE</button>        
        </div>
    )
}

export default HeroSection;
