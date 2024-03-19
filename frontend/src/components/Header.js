import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/global.css';


const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">QuickStop</h1>
      <nav>
        <ul className="nav-links">
     
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" /> Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;




