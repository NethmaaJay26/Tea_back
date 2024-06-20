import React, { useState } from 'react'
import './Addproducts.css'
import upload_icon from '../../assets/upload.jpg'

const Addproducts = () => {
    const[image,setImage] =useState(false);
    const [productDetails,setProductDetails] =useState({
        name:"",
        image:"",
        category:"Tea",
        price:""
    })

    const imageHandler = (e) =>{
        setImage(e.target.files[0]);

    }
    const changeHandler = (e) =>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const Add_Product = async ()=>{
          console.log(productDetails);
          let responseData;
          let product = productDetails;

          let formData = new FormData();
          formData.append('product',image);

          await fetch('http://localhost:4000/Uploads',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
          }).then((resp)=>resp.json()).then((data)=>{responseData=data});

          if (responseData.success) 
            {
                product.image = responseData.image_url;
                console.log(product);
                await fetch('http://localhost:4000/addproduct',{
                    method:'POST',
                    headers:{
                        Accepct:'application/json',
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify(product),
                }).then((resp)=>resp.json()).then((data)=>{
                    data.success?alert("Product Added"):alert("Failed")
                })
            
          }
    }



  return (
    <div className='add-product'>
        <div className="addproduct-itemfield">
            <p>Product Title</p>
            <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>Price</p>
                <input value={productDetails.price} onChange={changeHandler} type="text" name='price' placeholder='Type here' />
            </div>
        </div>
        <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select value={productDetails.category} onChange={changeHandler} name="category" className='addproduct-selector'>
                <option value="Tea">Tea</option>
                <option value="Teawares">Teawares</option>
                <option value="Gifts">Gifts</option>
                <option value="Cafe">Cafe</option>
            </select>

        </div>
        <div className="addproduct-itemfield">
            <p>Add the Image</p>
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):upload_icon} className='addproduct-icon' alt="" />
            </label>
            <input onChange={imageHandler} type="file" name='image' id='file-input' hidden/>
        </div>
        <button onClick={()=>{Add_Product()}}className='addproduct-button'>Add the product</button>


    </div>
  )
}

export default Addproducts