import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/css/global.css'

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`/api/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  const { name, description, price, image } = product;

  return (
    <div>
      <img src={image} alt={name} className="product-image" />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>${price}</p>
        <button className="btn-add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;

