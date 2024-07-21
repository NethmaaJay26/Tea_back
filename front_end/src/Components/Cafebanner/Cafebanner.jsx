import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './Cafebanner.css'
import leaf from '../Assets/leaf.png'
import arrow from '../Assets/arrow.png'
import banner4 from '../Assets/cafe2.jpg'
import banner5 from '../Assets/cafe1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Cafebanner = () => {

  const navigate = useNavigate();

  const ClickCafe = () => {
    navigate('/cafe');
  } 

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
        <div className='cafebanner'>
      <div className="cafebanner-columns">
        <div className="cafebanner-left" data-aos="fade-right">
          <div>
            <div className="cafe-banner" data-aos="fade-right" data-aos-delay="200">
              <p>Enjoy</p>
              <img src={leaf} alt="Leaf icon" />
            </div>
            <p data-aos="fade-right" data-aos-delay="400">Fresh Brews</p>
            <p data-aos="fade-right" data-aos-delay="600">at Our Café</p>
          </div>

          <div className="para" data-aos="fade-right" data-aos-delay="800">
            <p>Unwind with our exquisite tea blends in a warm and inviting atmosphere.</p>
            <p>Enjoy a perfect cup and delicious treats at The Tea Loft Café</p>
          </div>

          <div className="cafe-button" onClick={ClickCafe} data-aos="fade-right" data-aos-delay="1000">
            <div>Visit</div>
            <img src={arrow} alt="Arrow icon" />
          </div>
        </div>

        <div className="cafebanner-center" data-aos="fade-up" data-aos-delay="1200">
          <img src={banner5} alt="Cafe interior" />
        </div>
        
        <div className="cafebanner-right" data-aos="fade-left" data-aos-delay="1400">
          <img src={banner4} alt="Cafe exterior" />
          </div>
          </div>
        </div>
      )
    }

export default Cafebanner