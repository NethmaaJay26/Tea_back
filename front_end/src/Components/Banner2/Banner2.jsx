import React, { useEffect } from 'react'
import leaf from '../Assets/leaf.png'
import './Banner2.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Banner2 = () => {
      useEffect(() => {
            AOS.init({
              duration: 1000,
              once: false,
              mirror:true,
            });
          }, []);

  return (
      <div className='banner2'>
      <h2 data-aos="fade-up">Welcome to The Tea Loft</h2>
      <hr />
      <div className="point-container">
        <div className="point1" data-aos="fade-up" data-aos-delay="200">
          <img src={leaf} alt="Leaf icon" />
          <h1>Discover the Perfect Brew</h1>
          <p>Explore our curated collection to find the ideal tea that suits your taste and brewing preference</p>
        </div>
        
        <div className="point1" data-aos="fade-up" data-aos-delay="400">
          <img src={leaf} alt="Leaf icon" />
          <h1>Quality You Can Taste</h1>
          <p>  Experience the exceptional flavor of our carefully selected, high-quality teas in every sip</p>
        </div>

        <div className="point1" data-aos="fade-up" data-aos-delay="600">
          <img src={leaf} alt="Leaf icon" />
          <h1>A Cup for Every Mood</h1>
                <p> Whether you need to relax, energize, or find comfort, we have the perfect tea for every mood</p>
          </div>
          </div>
      </div>

  )
}


export default Banner2