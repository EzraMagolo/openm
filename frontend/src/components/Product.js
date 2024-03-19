import React from 'react';
import '../assets/css/global.css'

const Product = ({ product, onAddToCart }) => {
  const { _id, name, price, image } = product;

  return (
    <div className="product">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <p className="product-name">{name}</p>
        <p className="product-price">${price}</p>
        <button className="btn-add-to-cart" onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
