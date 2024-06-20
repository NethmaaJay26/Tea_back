import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo5.png'
import proflogo from '../../assets/nav-logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className='nav-logo' />
        <div className="profile">
            <img src={proflogo} alt="" />
            <p>Admin</p>
        </div>
    </div>
  )
}

export default Navbar