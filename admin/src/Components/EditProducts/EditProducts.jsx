import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditProducts.css'

const EditProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
  });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:4000/product/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('category', product.category);
    if (imageFile) {
      formData.append('image', imageFile);
    } else {
      formData.append('image', product.image); 
    }

    await fetch(`http://localhost:4000/editproduct/${id}`, {
      method: 'PUT',
      body: formData,
    });
    
    navigate('/listproduct');
  };

  return (
    <div className="edit-container">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Category:
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            className="editproduct-selector"
          >
            <option value="Tea">Tea</option>
            <option value="Teawares">Teawares</option>
            <option value="Gifts">Gifts</option>
            <option value="Cafe">Cafe</option>
          </select>
        </label>
        <label>
          Image:
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="editproduct-image"
          />
        </label>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default EditProducts;
