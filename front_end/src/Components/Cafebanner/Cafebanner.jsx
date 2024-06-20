import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Cafebanner.css'
import leaf from '../Assets/leaf.png'
import arrow from '../Assets/arrow.png'
import banner4 from '../Assets/cafe2.jpg'
import banner5 from '../Assets/cafe1.jpg'

export const Cafebanner = () => {

  const navigate = useNavigate();

  const ClickCafe = () => {
    navigate('/cafe');
  } 
  return (
        <div className='cafebanner'>
          <div className="cafebanner-columns">

          <div className="cafebanner-left">
            
            <div>
              <div className="cafe-banner">
                    <p>Enjoy</p>
                    <img src={leaf} alt=""/>
              </div>
              <p>Fresh Brews</p>
              <p>at Our Café</p>
              
            </div>

            <div className="para">
              <p>Unwind with our exquisite tea blends in a warm and inviting atmosphere.</p>
              <p>Enjoy a perfect cup and delicious treats at The Tea Loft Café</p>

            </div>
            <div className="cafe-button" onClick={ClickCafe}>
                 <div>Visit</div>
                 <img src={arrow} alt=""/>
            </div>
            
          </div>
          <div className="cafebanner-center">
          <img src={banner5} alt=''/>

          </div>
          
          <div className="cafebanner-right">
            <img src={banner4} alt=''/>
          </div>
          </div>
        </div>
      )
    }

export default Cafebanner