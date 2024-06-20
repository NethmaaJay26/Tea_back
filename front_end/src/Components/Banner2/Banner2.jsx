import React from 'react'
import leaf from '../Assets/leaf.png'
import './Banner2.css'

export const Banner2 = () => {

  return (
    <div className='banner2'>
        <h2>Welcome to The Tea Loft</h2>
        <hr/>
        <div className="point-container">
          <div className="point1">
                <img src={leaf} alt=""/>
                <h1>Discover the Perfect Brew   </h1>
                <p>   Explore our curated collection to find the ideal tea that suits your taste and brewing preference</p>
          </div>
          
          <div className="point1">
                <img src={leaf} alt=""/>
                <h1>Quality You Can Taste</h1>
                <p> Experience the exceptional flavor of our carefully selected, high-quality teas in every sip</p>
          </div>

          <div className="point1">
                <img src={leaf} alt=""/>
                <h1>A Cup for Every Mood</h1>
                <p> Whether you need to relax, energize, or find comfort, we have the perfect tea for every mood</p>
          </div>
          </div>
      </div>

  )
}


export default Banner2