import React from 'react';
import img1 from '../img/meetHisFriends1.png';
import img2 from '../img/meetHisFriends2.png';
import img3 from '../img/meetHisFriends3.png';


const Section2 = ()=>{

  return (
    <div className='section2'>
      <div className='container'>
        <div>
          <h2>meet his friends</h2>
        </div>
        <div className='imagens'>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img2} />
          </div>
          <div>
            <img src={img3} />
          </div>
        </div>
      </div>
    </div>
  )
}


export default Section2;