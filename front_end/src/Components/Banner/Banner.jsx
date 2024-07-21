import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import './Banner.css'
import leaf from '../Assets/leaf.png'
import arrow from '../Assets/arrow.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {

  const navigate = useNavigate();

  const ClickTea = () => {
    navigate('/tea');
  }
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  

  return (
    <div className='banner'>
      <div className="banner-left" data-aos="fade-right">
        <h2>Fresh Arrivals Just for You</h2>
        <div data-aos="fade-right" data-aos-delay="200">
          <div className="home-banner">
            <p>Discover</p>
            <img src={leaf} alt="Leaf icon" />
          </div>
          <p>Our Latest</p>
          <p>Tea Collections</p>
        </div>
        <div className="latest-button" onClick={ClickTea} data-aos="fade-right" data-aos-delay="400">
          <div>Explore New Products</div>
          <img src={arrow} alt="Arrow icon" />
        </div>
      </div>
    </div>
  )
}
export default Banner