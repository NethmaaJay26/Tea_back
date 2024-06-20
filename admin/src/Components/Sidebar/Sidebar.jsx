import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import addp_icon from '../../assets/addp.png'
import listp_icon from '../../assets/list.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:'none'}}>
           <div className="sidebar-item">
              <img src={addp_icon} alt="" />
              <p>Add Product</p>
           </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration:'none'}}>
           <div className="sidebar-item">
              <img src={listp_icon} alt="" />
              <p>Product List</p>
           </div>
        </Link>
    </div>
  )
}

export default Sidebar