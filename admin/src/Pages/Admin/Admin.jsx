import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import Addproducts from '../../Components/Addproducts/Addproducts'
import Listproducts from '../../Components/Listproducts/Listproducts'
import EditProducts from '../../Components/EditProducts/EditProducts';

const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
          <Route path='/addproduct' element={<Addproducts/>}/>
          <Route path='/listproduct' element={<Listproducts/>}/>
          <Route path='/editproduct/:id' element={<EditProducts />} />
        </Routes>
    </div>
  )
}

export default Admin