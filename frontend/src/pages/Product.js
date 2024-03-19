import React, { useState } from 'react';
import '../assets/css/Product.css';

const Product = ({ product, onAddToCart }) => {
  const { _id, name, price, description, image } = product;
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(true);
    onAddToCart(product);
  };

  return (
    <div className="product" key={_id}>
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <p className="product-name">{name}</p>
        <p className="product-price">${price}</p>
        <p className="product-description">{description}</p>
        <button
          className="btn-add-to-cart"
          onClick={handleAddToCart}
          disabled={inCart}
        >
          {inCart ? 'Item in Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default Product;



