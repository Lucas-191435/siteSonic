import React from 'react';

import heroimg from '../img/hero_cabecas_sonic.png'
const Hero = ()=>{

  return (
    <div className='hero'>
      <div className='container'>
        <div>
          <h2>The Most Famous Hedgehog in The World</h2>
          <p>And the main mascot of sega</p>
        </div>
        <div>
          <img src={heroimg} />
        </div>
      </div>
    </div>
  )
}


export default Hero;