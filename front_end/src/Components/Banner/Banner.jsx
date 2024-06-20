import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Banner.css'
import leaf from '../Assets/leaf.png'
import arrow from '../Assets/arrow.png'


const Banner = () => {

  const navigate = useNavigate();

  const ClickTea = () => {
    navigate('/tea');
  }
  
  return (
    <div className='banner'>
      <div className="banner-left">
        <h2>Fresh Arrivals Just for You</h2>
        <div>
          <div className="home-banner">
                <p>Discover</p>
                <img src={leaf} alt=""/>
          </div>
          <p>Our Latest</p>
          <p>Tea Collections</p>
        </div>
        <div className="latest-button" onClick={ClickTea}>
             <div>Explore New Products</div>
             <img src={arrow} alt=""/>
        </div>
      </div>
    </div>
  )
}
export default Banner