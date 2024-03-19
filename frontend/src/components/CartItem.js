import React from 'react';
import '../assets/css/global.css'



const CartItem = ({ item, onRemove }) => {
  const { product, quantity } = item;

  return (
    <div className="cart-item">
      <img src={product.image} alt={product.name} className="cart-item-image" />
      <div className="cart-item-details">
        <p className="cart-item-name">{product.name}</p>
        <p className="cart-item-price">${product.price}</p>
        <p className="cart-item-quantity">Quantity: {quantity}</p>
      </div>
      <button className="btn-remove" onClick={() => onRemove(product._id)}>Remove</button>
    </div>
  );
};

export default CartItem;
