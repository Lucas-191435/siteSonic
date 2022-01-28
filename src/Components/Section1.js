import React from 'react';
import imgSection1 from '../img/whoIsSonic.png';

const Section1 = ()=>{

  return (
    <div className='section1'>
      <div className='container'>
        <div className='titulo'>
          <h1>Enter the world from this dear</h1>
        </div>
        <div className='colunas'>
          <div className='divComImg'>
            <img src={imgSection1} alt='who is sonic' />
          </div>
          <div className='col_textos'>
            <h3>Who is Sonic?</h3>
            <p>Sonic the Hedgehog is the titular main protagonist of the Sonic the Hedgehog series and Sega's mascot. He is an anthropomorphic hedgehog born with the ability to run faster than the speed of sound, hence his name, and possesses lightning-fast reflexes to match his speed. </p>
            <p>As his species implies, Sonic can also roll up into a concussive ball, primarily to attack enemies.</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Section1;