import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import ProductService from '../services/ProductService';
import '../assets/css/global.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productsData = await ProductService.getProducts();
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleAddToCart = async (product) => {
    try {
      // Implement your add to cart logic here
      console.log('Add to cart:', product);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <section>
      <h2 className="section-title">Products</h2>
      <div className="product-list">
        {products.map(product => (
          <Product
            key={product._id} // Assuming _id is unique for each product
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;




