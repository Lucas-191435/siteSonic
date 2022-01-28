import React from 'react';
import knuclkes from '../img/knuckes_pers 1.jpg';
import tails from '../img/tais_pers 1.png';
import amy from '../img/Amy_pers 1.png';
import egg from '../img/EggMan_pers 1.png';

const Section3 = ()=>{

  return (
    <div className='section3'>
      <div className='container'>
        <div className='card1 card'>
          <div>
            <img src={knuclkes}/>
          </div>
          <div className='content_text'>
            <h3>Knuclkes</h3>
            <p>Knuckles the Echidna is one of the main characters from the Sonic the Hedgehog series. He is an anthropomorphic echidna and the current guardian of the Master Emerald, a powerful ancient relic which is his solemn duty to protect from anyone seeking to abuse it</p>
            <button>More...</button>
          </div>
        </div>

        <div className='card2 card'>

          <div className='content_text'>
            <div >
              <h3>Miles “Tails”</h3>
            </div>
            <p>Miles Prower better known by his nickname, Tails, is a fictional character that appears in the Sonic the Hedgehog series. He is an anthropomorphic fox born with two distinct twin-tails, hence his nickname. Because of his abnormality, Tails was a victim to bullying during his youth.</p>
            <button>More...</button>
          </div>
          <div>
            <img src={tails}/>
          </div>
        </div>

        <div className='card3 card'>
          <div>
            <img src={egg}/>
          </div>
          <div className='content_text'>
            <h3>Doctor Eggman</h3>
            <p>Doctor Ivo Robotnik, better known by the alias Doctor Eggman, is the main antagonist of the Sonic the Hedgehog series. He is an evil human scientist and the arch-nemesis of Sonic the Hedgehog. Boasting an IQ of 300, Eggman dreams of dominating the world, but his constant plots to establish his Eggman Empire are always thwarted by Sonic and his friends.</p>
            <button>More...</button>
          </div>
        </div>

        <div className='card4 card'>
          
          <div className='content_text'>
            <h3>Amy Rose</h3>
            <p>Amy Rose , also known as Rosy the Rascal, is a fictional character from the Sonic the Hedgehog series. Since meeting Sonic on Little Planet, Amy has become his self-proclaimed girlfriend and has attempted to win his heart by any means during their adventures. She wields the Piko Piko Hammer, a powerful melee weapon which she uses with skills second to none and never leaves home without</p>
            <button>More...</button>
          </div>
          <div>
            <img src={amy}/>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Section3;